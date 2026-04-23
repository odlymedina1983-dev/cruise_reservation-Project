import "../../styles/components/Hero/_MonthSelect.scss";

function ChevronIcon() {
  return (
    <svg viewBox="0 0 19 11" xmlns="http://www.w3.org/2000/svg" className="month-select__chevron">
      <path
        d="M9.49995 10.8305C9.15943 10.8305 8.81895 10.7005 8.55934 10.441L0.389769 2.27137C-0.129923 1.75168 -0.129923 0.909092 0.389769 0.389611C0.90925 -0.12987 1.75167 -0.12987 2.27141 0.389611L9.49995 7.61857L16.7285 0.389863C17.2482 -0.129618 18.0906 -0.129618 18.61 0.389863C19.1299 0.909344 19.1299 1.75193 18.61 2.27163L10.4406 10.4413C10.1808 10.7008 9.84034 10.8305 9.49995 10.8305Z"
        fill="currentColor"
      />
    </svg>
  );
}

const MONTHS = [
  { value: 0, label: "January", short: "Jan" },
  { value: 1, label: "February", short: "Feb" },
  { value: 2, label: "March", short: "Mar" },
  { value: 3, label: "April", short: "Apr" },
  { value: 4, label: "May", short: "May" },
  { value: 5, label: "June", short: "Jun" },
  { value: 6, label: "July", short: "Jul" },
  { value: 7, label: "August", short: "Aug" },
  { value: 8, label: "September", short: "Sep" },
  { value: 9, label: "October", short: "Oct" },
  { value: 10, label: "November", short: "Nov" },
  { value: 11, label: "December", short: "Dec" },
];

function MonthSelect({ value, isOpen, onToggle, onSelect }) {
  const selectedMonth = MONTHS.find((month) => month.value === value);

  return (
    <div className={`month-select ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="month-select__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="month-select__label">
          {selectedMonth ? selectedMonth.short : "Month"}
        </span>

        <span className="month-select__chevron-box" aria-hidden="true">
          <ChevronIcon />
        </span>
      </button>

      {isOpen && (
        <div className="month-select__dropdown">
          <ul className="month-select__list" role="listbox" aria-label="Month options">
            {MONTHS.map((month) => (
              <li key={month.value} className="month-select__item-wrapper">
                <button
                  type="button"
                  className={`month-select__item ${
                    value === month.value ? "is-selected" : ""
                  }`}
                  onClick={() => onSelect(month.value)}
                >
                  {month.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MonthSelect;