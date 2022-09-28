import { AppartItem } from "components";

export default function List({ data }) {
  return (
    <ul>
      {data.map((element, index) => (
        <AppartItem key={"list" + index} {...element} />
      ))}
    </ul>
  );
}
