import { useEffect, useRef, useState } from "react";
import "../../styles/components/Hero/_KanowaScore.scss";

const OPTIONS = [
  "Any Score",
  "6.0+",
  "7.0+",
  "8.0+",
  "9.0+",
];

function KanowaScoreIcon() {
  return (
    <svg viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg" className="kanowa-score__icon">
      <path
        d="M7.82013e-05 4.41797H2.39949V12.0557L5.9327 8.10938H8.93855L4.82527 12.6973L9.43953 17.6719H6.46004L2.39949 13.2686V17.6719H7.82013e-05V4.41797ZM20.1249 2.77734L17.6991 4.92188C16.8476 3.73438 15.9804 3.14062 15.0976 3.14062C14.6679 3.14062 14.3163 3.25781 14.0429 3.49219C13.7695 3.71875 13.6327 3.97656 13.6327 4.26562C13.6327 4.55469 13.7304 4.82812 13.9257 5.08594C14.1913 5.42969 14.9921 6.16797 16.328 7.30078C17.578 8.34766 18.3359 9.00781 18.6015 9.28125C19.2655 9.95312 19.7343 10.5977 20.0077 11.2148C20.289 11.8242 20.4296 12.4922 20.4296 13.2188C20.4296 14.6328 19.9413 15.8008 18.9648 16.7227C17.9882 17.6445 16.7148 18.1055 15.1445 18.1055C13.9179 18.1055 12.8476 17.8047 11.9335 17.2031C11.0273 16.6016 10.2499 15.6562 9.60148 14.3672L12.3554 12.7031C13.1835 14.2266 14.1366 14.9883 15.2148 14.9883C15.7773 14.9883 16.2499 14.8242 16.6327 14.4961C17.0155 14.168 17.207 13.7891 17.207 13.3594C17.207 12.9688 17.0624 12.5781 16.7734 12.1875C16.4843 11.7969 15.8476 11.1992 14.8632 10.3945C12.9882 8.86328 11.7773 7.68359 11.2304 6.85547C10.6835 6.01953 10.4101 5.1875 10.4101 4.35938C10.4101 3.16406 10.8632 2.14063 11.7695 1.28906C12.6835 0.429688 13.8085 0 15.1445 0C16.0038 0 16.8202 0.199219 17.5937 0.597656C18.3749 0.996094 19.2187 1.72266 20.1249 2.77734Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 19 11" xmlns="http://www.w3.org/2000/svg" className="kanowa-score__chevron">
      <path
        d="M9.49995 10.8305C9.15943 10.8305 8.81895 10.7005 8.55934 10.441L0.389769 2.27137C-0.129923 1.75168 -0.129923 0.909092 0.389769 0.389611C0.90925 -0.12987 1.75167 -0.12987 2.27141 0.389611L9.49995 7.61857L16.7285 0.389863C17.2482 -0.129618 18.0906 -0.129618 18.61 0.389863C19.1299 0.909344 19.1299 1.75193 18.61 2.27163L10.4406 10.4413C10.1808 10.7008 9.84034 10.8305 9.49995 10.8305Z"
        fill="currentColor"
      />
    </svg>
  );
}

function KanowaScore() {
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
    <div ref={rootRef} className={`kanowa-score ${isOpen ? "is-open" : ""}`}>
      {!isOpen && (
        <button
          type="button"
          className="kanowa-score__trigger"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="kanowa-score__icon-box" aria-hidden="true">
            <KanowaScoreIcon />
          </span>

          <span className="kanowa-score__label">
            {selected || "KanowaScore"}
          </span>

          <span className="kanowa-score__chevron-box" aria-hidden="true">
            <ChevronIcon />
          </span>
        </button>
      )}

      {isOpen && (
        <div className="kanowa-score__dropdown">
          <button
            type="button"
            className="kanowa-score__header"
            onClick={handleToggle}
            aria-expanded={isOpen}
          >
            Kanowa Score
          </button>

          <ul className="kanowa-score__list" role="listbox" aria-label="Kanowa Score options">
            {OPTIONS.map((option) => (
              <li key={option} className="kanowa-score__item-wrapper">
                <button
                  type="button"
                  className={`kanowa-score__item ${selected === option ? "is-selected" : ""}`}
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

export default KanowaScore;