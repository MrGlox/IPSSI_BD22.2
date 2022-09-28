import "./Item.css";

export default function Item({ status, title, children }) {
  return (
    <div>
      <h2>
        <span className={`pellet ${status && "pellet--dispo"}`}>{status}</span>
        {title}
      </h2>
      <p>{children}</p>
    </div>
  );
}
