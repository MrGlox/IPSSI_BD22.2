import { Component } from "react";

export default class Clock extends Component {
  state = {
    date: new Date(),
  };

  tick() {
    this.setState((prev) => ({ ...prev, date: new Date() }));
  }

  componentDidMount() {
    setTimeout(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    setTimeout(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearTimeout(() => this.tick());
  }

  render() {
    return <h2>Mon horloge: {this.state.date.toLocaleTimeString()}</h2>;
  }
}
