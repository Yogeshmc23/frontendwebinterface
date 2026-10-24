/**
 * Minimal, consistent icon set for TaskFlow - stroke-based, 16px base.
 * Avoid emoji; use professional SVG.
 */
export function Icon({ name, size = 16, ...props }) {
  const common = { width: size, height: size, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, ...props }
  switch (name) {
    case 'dashboard':
      return (
        <svg {...common}><rect x="2" y="2" width="5" height="5" rx="1" /><rect x="9" y="2" width="5" height="5" rx="1" /><rect x="2" y="9" width="5" height="5" rx="1" /><rect x="9" y="9" width="5" height="5" rx="1" /></svg>
      )
    case 'projects':
      return (
        <svg {...common}><rect x="2.5" y="2.5" width="11" height="11" rx="1.25" /><path d="M5.5 7H10.5M5.5 10H10.5M7 5.5V10.5" /></svg>
      )
    case 'tasks':
      return (
        <svg {...common}><path d="M3 3H13V13H3V3Z" /><path d="M5 8H11M5 11H11M7 5H9" /></svg>
      )
    case 'team':
      return (
        <svg {...common}><circle cx="6" cy="6" r="2.5" /><path d="M2.5 13C2.5 10.8 4 9 6 9C8 9 9.5 10.8 9.5 13" /><circle cx="11.5" cy="7" r="1.8" /><path d="M13.5 13C13.5 11.2 12.2 9.7 11 9.7" /></svg>
      )
    case 'profile':
      return (
        <svg {...common}><circle cx="8" cy="5.5" r="2.5" /><path d="M3 13C3 10.5 5 9 8 9C11 9 13 10.5 13 13" /></svg>
      )
    case 'settings':
      return (
        <svg {...common}><path d="M8 10.5A2.5 2.5 0 1 0 8 5.5A2.5 2.5 0 0 0 8 10.5Z" /><path d="M12.8 8.2L13.7 7.6M12.8 7.8L13.7 8.4M3.2 7.8L2.3 7.2M3.2 8.2L2.3 8.8M8 2.3V3.2M8 12.8V13.7M11 4L11.6 2.9M5 12L4.4 13.1M12 11L13.1 11.6M4 5L2.9 4.4" /></svg>
      )
    case 'search':
      return (
        <svg {...common}><circle cx="6.5" cy="6.5" r="3.5" /><path d="M10.5 10.5L13 13" /></svg>
      )
    case 'plus':
      return (
        <svg {...common}><path d="M8 3V13M3 8H13" /></svg>
      )
    case 'check':
      return (
        <svg {...common}><path d="M3.5 8.5L6.5 11.5L12.5 4.5" /></svg>
      )
    case 'arrow':
      return (
        <svg {...common}><path d="M5 3L11 8L5 13" /></svg>
      )
    case 'external':
      return (
        <svg {...common}><path d="M6 3H13V10" /><path d="M13 3L3 13" /><path d="M3 10V13H6" /></svg>
      )
    case 'menu':
      return (
        <svg {...common}><path d="M2.5 5H13.5M2.5 8H13.5M2.5 11H13.5" /></svg>
      )
    case 'close':
      return (
        <svg {...common}><path d="M3 3L13 13M13 3L3 13" /></svg>
      )
    case 'sun':
      return (
        <svg {...common}><circle cx="8" cy="8" r="2.5" /><path d="M8 1.5V3M8 13V14.5M1.5 8H3M13 8H14.5M3.2 3.2L4.2 4.2M11.8 11.8L12.8 12.8M12.8 3.2L11.8 4.2M4.2 11.8L3.2 12.8" /></svg>
      )
    case 'moon':
      return (
        <svg {...common}><path d="M13 8A5 5 0 1 1 7 2A4 4 0 0 0 13 8Z" /></svg>
      )
    default:
      return <svg {...common}><circle cx="8" cy="8" r="5" /></svg>
  }
}
