export default function TodoItem({ children, status = false, handleClick }) {
  return (
    <li
      style={status ? { textDecoration: "line-through" } : {}}
      onClick={handleClick}
    >
      {children}
    </li>
  );
}
