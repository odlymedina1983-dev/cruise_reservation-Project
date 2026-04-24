import { useEffect, useRef, useState } from "react";
import "../../styles/components/Hero/_DateSelect.scss";
import YearSelect from "./YearSelect";
import MonthSelect from "./MonthSelect";
import DaySelect from "./DaySelect";

function DateSelect({ value, onChange, onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const rootRef = useRef(null);

  const selectedYear = value.year;
  const selectedMonth = value.month;
  const selectedDay = value.day;

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpenDropdown(null);
        onClose();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [onClose]);

  useEffect(() => {
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();

    if (selectedDay > daysInMonth) {
      onChange({
        year: selectedYear,
        month: selectedMonth,
        day: daysInMonth,
      });
    }
  }, [selectedYear, selectedMonth, selectedDay, onChange]);

  const handleToggle = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleSelectYear = (year) => {
    onChange({
      ...value,
      year,
    });
    setOpenDropdown(null);
  };

  const handleSelectMonth = (month) => {
    onChange({
      ...value,
      month,
    });
    setOpenDropdown(null);
  };

  const handleSelectDay = (day) => {
    onChange({
      ...value,
      day,
    });
    setOpenDropdown(null);
    onClose();
  };

  return (
    <div ref={rootRef} className="date-select">
      <YearSelect
        value={selectedYear}
        isOpen={openDropdown === "year"}
        onToggle={() => handleToggle("year")}
        onSelect={handleSelectYear}
      />

      <MonthSelect
        value={selectedMonth}
        isOpen={openDropdown === "month"}
        onToggle={() => handleToggle("month")}
        onSelect={handleSelectMonth}
      />

      <DaySelect
        value={selectedDay}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        isOpen={openDropdown === "day"}
        onToggle={() => handleToggle("day")}
        onSelect={handleSelectDay}
      />
    </div>
  );
}

export default DateSelect;