export default function Badge({ variant = 'neutral', children, ...props }) {
  return (
    <span className={`badge badge-${variant}`} {...props}>
      {children}
    </span>
  )
}
