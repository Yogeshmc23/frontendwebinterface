export default function Pagination({ page, totalPages, onPageChange, totalItems, perPage }) {
  if (totalPages <= 1) return null
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  // compact pages: show first, last, around current
  const visible = pages.filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
  const items = []
  let last = 0
  for (const p of visible) {
    if (last && p - last > 1) items.push('…')
    items.push(p)
    last = p
  }

  return (
    <div className="pagination">
      <div className="small muted">
        {totalItems ? `Showing ${(page-1)*perPage + 1}–${Math.min(page*perPage, totalItems)} of ${totalItems}` : ''}
      </div>
      <div className="pager">
        <button className="page-btn" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>Prev</button>
        {items.map((it, idx) =>
          it === '…' ? (
            <span key={`e-${idx}`} style={{ padding: '0 4px', color: 'var(--color-text-3)' }}>…</span>
          ) : (
            <button key={it} className={`page-btn ${it === page ? 'active' : ''}`} onClick={() => onPageChange(it)}>
              {it}
            </button>
          )
        )}
        <button className="page-btn" disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>Next</button>
      </div>
    </div>
  )
}
