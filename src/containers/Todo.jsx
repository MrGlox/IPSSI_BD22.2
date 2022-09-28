import { useState } from "react";

import { TodoList } from "components";

export default function Todo() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  function handleSubmit(ev) {
    ev.preventDefault();

    setTodoList((prev) => [
      ...prev.todoList,
      { status: false, children: ev.target[0].value },
    ]);
  }

  function handleScratch(index) {
    console.log("line through", index);

    setTodoList((prev) => {
      const tmpArray = prev.todoList;
      tmpArray[index].status = !tmpArray[index].status;

      return [...tmpArray];
    });
  }

  localStorage.setItem("todoList", JSON.stringify(todoList));

  return (
    <>
      <h2>Ma to do</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" id="todo" />
        <button type="submit">Ajouter to do</button>
      </form>
      <TodoList list={todoList} handleClick={handleScratch} />
    </>
  );
}
