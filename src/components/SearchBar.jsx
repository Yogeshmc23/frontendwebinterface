import { Icon } from './Icon.jsx'

export default function SearchBar({ value, onChange, placeholder = 'Search…' }) {
  return (
    <div className="search-input">
      <span className="search-icon" aria-hidden><Icon name="search" size={15} /></span>
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
