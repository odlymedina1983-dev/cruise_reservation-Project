import { useState } from "react";
import "../../styles/components/Hero/_DateInput.scss";
import DateSelect from "./DateSelect";

function DateIcon() {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="date-field__icon">
      <path d="M16.4706 3.54294C16.47 2.98374 16.2475 2.44762 15.852 2.05226C15.4566 1.6569 14.9204 1.43459 14.3612 1.43412H13.6029V0.588236C13.6029 0.432226 13.541 0.282606 13.4307 0.17229C13.3203 0.0619746 13.1707 0 13.0147 0C12.8587 0 12.7091 0.0619746 12.5988 0.17229C12.4884 0.282606 12.4265 0.432226 12.4265 0.588236V1.43412H8.82353V0.588236C8.82353 0.432226 8.76156 0.282606 8.65124 0.17229C8.54093 0.0619746 8.39131 0 8.2353 0C8.07929 0 7.92967 0.0619746 7.81935 0.17229C7.70904 0.282606 7.64706 0.432226 7.64706 0.588236V1.43412H4.04412V0.588236C4.04412 0.432226 3.98214 0.282606 3.87183 0.17229C3.76151 0.0619746 3.61189 0 3.45588 0C3.29987 0 3.15025 0.0619746 3.03994 0.17229C2.92962 0.282606 2.86765 0.432226 2.86765 0.588236V1.43412H2.10941C1.55021 1.43459 1.01403 1.6569 0.618556 2.05226C0.223083 2.44762 0.000623049 2.98374 0 3.54294V4.70588H16.4706V3.54294Z" fill="currentColor" />
      <path d="M15.8824 10.5882C16.0789 10.5888 16.2753 10.6004 16.4706 10.6229V5.88235H0V13.7288C0.000778129 14.2997 0.227917 14.847 0.631614 15.2507C1.03531 15.6544 1.58262 15.8816 2.15353 15.8824H10.5882C10.59 14.4788 11.1483 13.1332 12.1407 12.1407C13.1332 11.1483 14.4788 10.59 15.8824 10.5882Z" fill="currentColor" />
      <path d="M15.8823 11.7647C15.0679 11.7647 14.2718 12.0062 13.5947 12.4586C12.9175 12.9111 12.3897 13.5542 12.0781 14.3066C11.7664 15.059 11.6849 15.8869 11.8438 16.6856C12.0027 17.4844 12.3948 18.2181 12.9707 18.7939C13.5465 19.3698 14.2802 19.762 15.079 19.9209C15.8777 20.0797 16.7057 19.9982 17.4581 19.6865C18.2105 19.3749 18.8535 18.8471 19.306 18.17C19.7585 17.4928 19.9999 16.6967 19.9999 15.8823C19.9987 14.7906 19.5645 13.744 18.7925 12.9721C18.0206 12.2001 16.974 11.7659 15.8823 11.7647ZM17.4747 17.4747C17.3643 17.585 17.2147 17.6469 17.0588 17.6469C16.9028 17.6469 16.7532 17.585 16.6429 17.4747L15.4664 16.2982C15.3561 16.1879 15.2941 16.0383 15.2941 15.8823V13.5294C15.2941 13.3734 15.356 13.2238 15.4664 13.1134C15.5767 13.0031 15.7263 12.9411 15.8823 12.9411C16.0383 12.9411 16.1879 13.0031 16.2982 13.1134C16.4086 13.2238 16.4705 13.3734 16.4705 13.5294V15.6388L17.4747 16.6429C17.5849 16.7532 17.6469 16.9028 17.6469 17.0588C17.6469 17.2148 17.5849 17.3644 17.4747 17.4747Z" fill="currentColor" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 19 11" xmlns="http://www.w3.org/2000/svg" className="date-field__chevron">
      <path d="M9.49995 10.8305C9.15943 10.8305 8.81895 10.7005 8.55934 10.441L0.389769 2.27137C-0.129923 1.75168 -0.129923 0.909092 0.389769 0.389611C0.90925 -0.12987 1.75167 -0.12987 2.27141 0.389611L9.49995 7.61857L16.7285 0.389863C17.2482 -0.129618 18.0906 -0.129618 18.61 0.389863C19.1299 0.909344 19.1299 1.75193 18.61 2.27163L10.4406 10.4413C10.1808 10.7008 9.84034 10.8305 9.49995 10.8305Z" fill="currentColor" />
    </svg>
  );
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDateLabel({ year, month, day }) {
  return `${MONTHS[month]} ${String(day).padStart(2, "0")}, ${year}`;
}

function DateInput() {
  const today = new Date();

  const [isActive, setIsActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDate(),
  });

  if (isActive) {
    return (
      <DateSelect
        value={selectedDate}
        onChange={setSelectedDate}
        onClose={() => setIsActive(false)}
      />
    );
  }

  return (
    <div className="date-field">
      <button
        type="button"
        className="date-field__trigger"
        onClick={() => setIsActive(true)}
        aria-label="Open date selector"
      >
        <span className="date-field__icon-box" aria-hidden="true">
          <DateIcon />
        </span>

        <span className="date-field__label">
          {formatDateLabel(selectedDate)}
        </span>

        <span className="date-field__chevron-box" aria-hidden="true">
          <ChevronIcon />
        </span>
      </button>
    </div>
  );
}

export default DateInput;