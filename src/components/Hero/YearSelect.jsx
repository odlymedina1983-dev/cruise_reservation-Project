import "../../styles/components/Hero/_YearSelect.scss";

function ChevronIcon() {
  return (
    <svg viewBox="0 0 19 11" xmlns="http://www.w3.org/2000/svg" className="year-select__chevron">
      <path
        d="M9.49995 10.8305C9.15943 10.8305 8.81895 10.7005 8.55934 10.441L0.389769 2.27137C-0.129923 1.75168 -0.129923 0.909092 0.389769 0.389611C0.90925 -0.12987 1.75167 -0.12987 2.27141 0.389611L9.49995 7.61857L16.7285 0.389863C17.2482 -0.129618 18.0906 -0.129618 18.61 0.389863C19.1299 0.909344 19.1299 1.75193 18.61 2.27163L10.4406 10.4413C10.1808 10.7008 9.84034 10.8305 9.49995 10.8305Z"
        fill="currentColor"
      />
    </svg>
  );
}

function YearSelect({ value, isOpen, onToggle, onSelect }) {
  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear + 1, currentYear + 2];

  return (
    <div className={`year-select ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="year-select__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="year-select__label">{value || "Year"}</span>
        <span className="year-select__chevron-box" aria-hidden="true">
          <ChevronIcon />
        </span>
      </button>

      {isOpen && (
        <div className="year-select__dropdown">
          <ul className="year-select__list" role="listbox" aria-label="Year options">
            {years.map((year) => (
              <li key={year} className="year-select__item-wrapper">
                <button
                  type="button"
                  className={`year-select__item ${value === year ? "is-selected" : ""}`}
                  onClick={() => onSelect(year)}
                >
                  {year}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default YearSelect;