import { Component } from "react";
import data from "../data.json";

import List from "../components/List";

export default class Form extends Component {
  state = { value: "", filteredData: data };

  handleChange(ev) {
    this.setState({
      value: ev.target.value,
      filteredData: data.filter((appart) =>
        appart.title.toLowerCase().includes(ev.target.value.toLowerCase())
      ),
    });
  }

  render() {
    const { filteredData, value } = this.state;

    return (
      <div>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <p>{value}</p>
        <List data={filteredData}></List>
      </div>
    );
  }
}