export default function SearchBar({ value, onChange, placeholder = 'Search…' }) {
  return (
    <div className="search-input">
      <span className="search-icon" aria-hidden>⌕</span>
      <input
        className="input"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  )
}
