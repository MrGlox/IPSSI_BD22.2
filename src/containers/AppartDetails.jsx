import { useParams } from "react-router-dom";
import slugify from "slugify";
import data from "../data.json";

export default function AppartDetails() {
  const { slug } = useParams();

  const appart = data.find(
    (element) => slugify(element.title, { lower: true }) === slug
  );

  return (
    <main>
      <h1>{appart.title}</h1>
      <p>{appart.children}</p>

      {/* notes
      commentaires */}
    </main>
  );
}
