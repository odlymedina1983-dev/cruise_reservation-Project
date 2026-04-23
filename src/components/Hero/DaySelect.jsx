import "../../styles/components/Hero/_DaySelect.scss";

function ChevronIcon() {
  return (
    <svg viewBox="0 0 19 11" xmlns="http://www.w3.org/2000/svg" className="day-select__chevron">
      <path
        d="M9.49995 10.8305C9.15943 10.8305 8.81895 10.7005 8.55934 10.441L0.389769 2.27137C-0.129923 1.75168 -0.129923 0.909092 0.389769 0.389611C0.90925 -0.12987 1.75167 -0.12987 2.27141 0.389611L9.49995 7.61857L16.7285 0.389863C17.2482 -0.129618 18.0906 -0.129618 18.61 0.389863C19.1299 0.909344 19.1299 1.75193 18.61 2.27163L10.4406 10.4413C10.1808 10.7008 9.84034 10.8305 9.49995 10.8305Z"
        fill="currentColor"
      />
    </svg>
  );
}

const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function formatDay(value) {
  if (!value) return "Day";
  return String(value).padStart(2, "0");
}

function buildCalendar(year, month) {
  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const cells = [];

  for (let i = 0; i < firstDayIndex; i += 1) {
    cells.push({ type: "empty", value: `empty-${i}` });
  }

  for (let day = 1; day <= totalDays; day += 1) {
    cells.push({ type: "day", value: day });
  }

  return cells;
}

function DaySelect({
  value,
  selectedYear,
  selectedMonth,
  isOpen,
  onToggle,
  onSelect,
}) {
  const calendarCells = buildCalendar(selectedYear, selectedMonth);

  return (
    <div className={`day-select ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="day-select__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="grid"
      >
        <span className="day-select__label">{formatDay(value)}</span>

        <span className="day-select__chevron-box" aria-hidden="true">
          <ChevronIcon />
        </span>
      </button>

      {isOpen && (
        <div className="day-select__dropdown">
          <div className="day-select__calendar" role="grid" aria-label="Day calendar">
            <div className="day-select__weekdays">
              {WEEK_DAYS.map((day) => (
                <span key={day} className="day-select__weekday">
                  {day}
                </span>
              ))}
            </div>

            <div className="day-select__grid">
              {calendarCells.map((cell) =>
                cell.type === "empty" ? (
                  <span
                    key={cell.value}
                    className="day-select__empty"
                    aria-hidden="true"
                  />
                ) : (
                  <button
                    key={cell.value}
                    type="button"
                    className={`day-select__day ${
                      value === cell.value ? "is-selected" : ""
                    }`}
                    onClick={() => onSelect(cell.value)}
                  >
                    <span className="day-select__day-inner">{cell.value}</span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DaySelect;