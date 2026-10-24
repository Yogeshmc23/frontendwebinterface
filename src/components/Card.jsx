export default function Card({ children, padding = 16, ...props }) {
  return (
    <div className="surface" style={{ padding }} {...props}>
      {children}
    </div>
  )
}
