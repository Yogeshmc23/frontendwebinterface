export default function Button({ variant = 'primary', size, block, children, ...props }) {
  const cls = ['btn', `btn-${variant}`, size ? `btn-${size}` : '', block ? 'btn-block' : ''].filter(Boolean).join(' ')
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
