import { useState } from 'react'

function SearchIcon({ onClick }) {
  return (
    <svg
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      onClick={onClick}
    >
      <path
        d="M14.9111 15L10.0111 10.1C9.62222 10.4111 9.175 10.6574 8.66944 10.8389C8.16389 11.0204 7.62593 11.1111 7.05556 11.1111C5.64259 11.1111 4.44676 10.6218 3.46806 9.64306C2.48935 8.66435 2 7.46852 2 6.05556C2 4.64259 2.48935 3.44676 3.46806 2.46806C4.44676 1.48935 5.64259 1 7.05556 1C8.46852 1 9.66435 1.48935 10.6431 2.46806C11.6218 3.44676 12.1111 4.64259 12.1111 6.05556C12.1111 6.62593 12.0204 7.16389 11.8389 7.66944C11.6574 8.175 11.4111 8.62222 11.1 9.01111L16 13.9111L14.9111 15ZM7.05556 9.55556C8.02778 9.55556 8.85417 9.21528 9.53472 8.53472C10.2153 7.85417 10.5556 7.02778 10.5556 6.05556C10.5556 5.08333 10.2153 4.25694 9.53472 3.57639C8.85417 2.89583 8.02778 2.55556 7.05556 2.55556C6.08333 2.55556 5.25694 2.89583 4.57639 3.57639C3.89583 4.25694 3.55556 5.08333 3.55556 6.05556C3.55556 7.02778 3.89583 7.85417 4.57639 8.53472C5.25694 9.21528 6.08333 9.55556 7.05556 9.55556Z"
        fill="currentColor"
      />
    </svg>
  )
}

function SearchBar({
  placeholder = 'search here...',
  size = 'sm',
  onSearch, // 👈 clave
}) {
  const [value, setValue] = useState('')
  const isTyping = value.length > 0

  const handleSearch = () => {
    if (onSearch) onSearch(value)
  }

  return (
    <div
      className={`search-bar search-bar--${size} ${
        isTyping ? 'is-typing' : ''
      }`}
    >
      <span className="search-bar__icon">
        <SearchIcon onClick={handleSearch} />
      </span>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="search-bar__input"
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch()
        }}
      />
    </div>
  )
}

export default SearchBar