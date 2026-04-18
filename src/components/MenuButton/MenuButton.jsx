function MenuIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M7.99998 14.4C11.5328 14.4 14.4 11.5328 14.4 8C14.4 4.46719 11.5328 1.6 7.99998 1.6C4.46716 1.6 1.59998 4.46719 1.59998 8C1.59998 11.5328 4.46716 14.4 7.99998 14.4ZM9.66716 10.9176H6.33279C6.1024 10.9176 5.91599 10.731 5.91599 10.5008C5.91599 10.2706 6.1024 10.084 6.33279 10.084H9.66716C9.89755 10.084 10.084 10.2706 10.084 10.5008C10.084 10.731 9.89755 10.9176 9.66716 10.9176ZM6.33279 5.08238H9.66716C9.89755 5.08238 10.084 5.26902 10.084 5.49918C10.084 5.72937 9.89755 5.91598 9.66716 5.91598H6.33279C6.1024 5.91598 5.91599 5.72937 5.91599 5.49918C5.91599 5.26902 6.1024 5.08238 6.33279 5.08238ZM5.08236 7.5832H10.9176C11.1479 7.5832 11.3344 7.7698 11.3344 8C11.3344 8.23015 11.1479 8.4168 10.9176 8.4168H5.08236C4.85201 8.4168 4.66556 8.23015 4.66556 8C4.66556 7.7698 4.85201 7.5832 5.08236 7.5832Z"
        fill="currentColor"
      />
    </svg>
  )
}

function MenuButton({
  size = 'md',
  color = 'brand',
  ariaLabel = 'Open menu',
  onClick,
}) {
  return (
    <button
      className={`menu-button menu-button--${size} menu-button--${color}`}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <span className="menu-button__icon">
        <MenuIcon />
      </span>
    </button>
  )
}

export default MenuButton