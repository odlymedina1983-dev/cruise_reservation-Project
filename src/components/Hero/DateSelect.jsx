import { useEffect, useRef, useState } from "react";
import "../../styles/components/Hero/_DateSelect.scss";
import YearSelect from "./YearSelect";
import MonthSelect from "./MonthSelect";
import DaySelect from "./DaySelect";

function DateSelect() {
  const today = new Date();

  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const rootRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, []);

  useEffect(() => {
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();

    if (selectedDay > daysInMonth) {
      setSelectedDay(daysInMonth);
    }
  }, [selectedYear, selectedMonth, selectedDay]);

  const handleToggle = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    setOpenDropdown(null);
  };

  const handleSelectMonth = (month) => {
    setSelectedMonth(month);
    setOpenDropdown(null);
  };

  const handleSelectDay = (day) => {
    setSelectedDay(day);
    setOpenDropdown(null);
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