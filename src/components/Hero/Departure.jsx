import { useEffect, useRef, useState } from "react";
import "../../styles/components/Hero/_Departure.scss";

const OPTIONS = [
  "Miami (MIA)",
  "Fort Lauderdale (FLL)",
  "Tampa (TPA)",
  "Jacksonville (JAX)",
  "West Palm Beach (WPB)",
  "Port Canaveral (PCV)",
];

function PortIcon() {
  return (
    <svg viewBox="0 0 18 26" xmlns="http://www.w3.org/2000/svg" className="departure__icon">
      <path
        d="M8.9995 1.82787C12.8397 1.82787 15.9647 4.63355 15.9647 8.08239C15.9647 11.5312 12.8397 14.3361 8.9995 14.3361C5.16026 14.3361 2.03619 11.5308 2.03619 8.08239C2.03619 4.63355 5.15978 1.82787 8.9995 1.82787ZM8.9995 0C4.02882 0 0 3.61866 0 8.08277C0 12.5465 8.99955 25.6574 8.99955 25.6574C8.99955 25.6574 18 12.5465 18 8.08277C18 3.61824 13.9716 0 8.9995 0ZM13.8766 8.43372L13.4302 11.1657L12.525 10.3765C11.8974 10.8402 11.3342 12.0216 8.8901 12.077C6.94614 12.077 6.13594 11.0042 5.42118 10.4856L4.59428 11.2049L4.12428 8.49789L7.23027 8.90874L6.37414 9.65427C6.37414 9.65427 7.10834 10.7511 8.3765 10.8277L8.37142 6.36947C7.68637 6.1555 7.1927 5.58896 7.1927 4.91834C7.1927 4.06331 7.98715 3.37065 8.96843 3.37065C9.94876 3.37065 10.7446 4.06335 10.7446 4.91834C10.7446 5.59936 10.2347 6.17216 9.53483 6.37736C9.53853 7.24819 9.55476 10.8444 9.53298 10.8444C10.5828 10.8182 11.5659 9.54188 11.5659 9.54188L10.7645 8.84377C10.765 8.8433 13.8766 8.43372 13.8766 8.43372ZM9.88528 4.89414C9.88528 4.45414 9.47416 4.09697 8.96848 4.09697C8.4637 4.09697 8.05395 4.45414 8.05395 4.89414C8.05395 5.33499 8.4637 5.69297 8.96848 5.69297C9.47463 5.69254 9.88528 5.33494 9.88528 4.89414Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 19 11" xmlns="http://www.w3.org/2000/svg" className="departure__chevron">
      <path
        d="M9.49995 10.8305C9.15943 10.8305 8.81895 10.7005 8.55934 10.441L0.389769 2.27137C-0.129923 1.75168 -0.129923 0.909092 0.389769 0.389611C0.90925 -0.12987 1.75167 -0.12987 2.27141 0.389611L9.49995 7.61857L16.7285 0.389863C17.2482 -0.129618 18.0906 -0.129618 18.61 0.389863C19.1299 0.909344 19.1299 1.75193 18.61 2.27163L10.4406 10.4413C10.1808 10.7008 9.84034 10.8305 9.49995 10.8305Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Departure() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const rootRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, []);

  return (
    <div ref={rootRef} className={`departure ${isOpen ? "is-open" : ""}`}>
      {!isOpen && (
        <button
          type="button"
          className="departure__trigger"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="departure__icon-box" aria-hidden="true">
            <PortIcon />
          </span>

          <span className="departure__label">
            {selected || "Departure Port"}
          </span>

          <span className="departure__chevron-box" aria-hidden="true">
            <ChevronIcon />
          </span>
        </button>
      )}

      {isOpen && (
        <div className="departure__dropdown">
          <button
            type="button"
            className="departure__header"
            onClick={handleToggle}
            aria-expanded={isOpen}
          >
            Departure Port
          </button>

          <ul className="departure__list" role="listbox" aria-label="Departure Port options">
            {OPTIONS.map((option) => (
              <li key={option} className="departure__item-wrapper">
                <button
                  type="button"
                  className={`departure__item ${selected === option ? "is-selected" : ""}`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Departure;