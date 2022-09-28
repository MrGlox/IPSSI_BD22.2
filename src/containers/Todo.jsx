import { Component } from "react";

import { TodoList } from "components";

export default class Todo extends Component {
  state = {
    todoList: JSON.parse(localStorage.getItem("todoList")) || [],
  };

  handleSubmit(ev) {
    ev.preventDefault();

    this.setState((prev) => ({
      todoList: [
        ...prev.todoList,
        { status: false, children: ev.target[0].value },
      ],
    }));
  }

  handleScratch(index) {
    console.log("line through", index);
    this.setState((prev) => {
      const tmpArray = prev.todoList;
      tmpArray[index].status = !tmpArray[index].status;

      return {
        todoList: [...tmpArray],
      };
    });
  }

  render() {
    localStorage.setItem("todoList", JSON.stringify(this.state.todoList));

    return (
      <>
        <h2>Ma to do</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="todo" id="todo" />
          <button type="submit">Ajouter to do</button>
        </form>
        <TodoList
          list={this.state.todoList}
          handleClick={this.handleScratch.bind(this)}
        />
      </>
    );
  }
}
