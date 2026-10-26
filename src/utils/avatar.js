/**
 * Local avatar generator.
 *
 * Demo data previously referenced remote placeholder photos (pravatar.cc).
 * That made the demo depend on a third-party service, leaked visitor IPs to it,
 * and broke the UI whenever the service was slow or blocked. These initials
 * avatars are generated locally as SVG data URIs: deterministic, offline-safe,
 * and no external requests.
 */

const PALETTE = ['#1A365D', '#2C5282', '#2F5D50', '#744210', '#4A3B78', '#7B341E']

function hashOf(value) {
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

export function initialsOf(name) {
  const parts = String(name ?? '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  if (!parts.length) return '?'
  const first = parts[0][0] ?? ''
  const second = parts.length > 1 ? parts[parts.length - 1][0] : ''
  // Keep only safe characters: initials are rendered inside an SVG document.
  const initials = `${first}${second}`.replace(/[^A-Za-z0-9]/g, '').toUpperCase()
  return initials || '?'
}

export function avatarFor(name, size = 96) {
  const label = String(name ?? '').trim() || 'Unknown member'
  const background = PALETTE[hashOf(label) % PALETTE.length]
  const initials = initialsOf(label)
  const pixelSize = Math.max(16, Number(size) || 96)
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${pixelSize}" height="${pixelSize}" viewBox="0 0 96 96">`,
    `<rect width="96" height="96" fill="${background}"/>`,
    `<text x="48" y="49" fill="#FFFFFF" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="38" font-weight="600" text-anchor="middle" dominant-baseline="middle">${initials}</text>`,
    '</svg>',
  ].join('')

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
