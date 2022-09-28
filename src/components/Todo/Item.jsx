export default function TodoItem({ children, status = false }) {
  return (
    <li style={status && { textDecoration: "line-through" }}>{children}</li>
  );
}
