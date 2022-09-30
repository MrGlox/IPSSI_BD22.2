import { Link } from "react-router-dom";
import slugify from "slugify";

import "./Item.css";

export default function Item({ status, title, children }) {
  return (
    <div>
      <h2>
        <Link to={slugify(title, { lower: true })}>
          <span className={`pellet ${status && "pellet--dispo"}`}>
            {status}
          </span>
          {title}
        </Link>
      </h2>
      <p>{children}</p>
    </div>
  );
}
