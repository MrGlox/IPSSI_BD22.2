import logo from "./logo.svg";
import "./App.css";

import Clock from "containers/Clock";
import Form from "containers/Form";

import Todo from "containers/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
        <Clock />
        <Todo />
      </header>
    </div>
  );
}

export default App;
