import { TodoItem } from "components";

export default function TodoList({ list = [] }) {
  return (
    <ul>
      {list.map((el, index) => (
        <TodoItem key={"todo" + index} {...el} />
      ))}
    </ul>
  );
}
