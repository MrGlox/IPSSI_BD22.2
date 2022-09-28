import { TodoItem } from "components";

export default function TodoList({ list = [], handleClick }) {
  return (
    <ul>
      {list.map((el, index) => (
        <TodoItem
          key={"todo" + index}
          {...el}
          handleClick={() => handleClick(index)}
        />
      ))}
    </ul>
  );
}
