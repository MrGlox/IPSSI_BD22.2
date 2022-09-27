import Item from "./Item";

export default function List({ data }) {
  return (
    <ul>
      {data.map((element, index) => (
        <Item key={"list" + index} {...element} />
      ))}
    </ul>
  );
}
