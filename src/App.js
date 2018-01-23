import React, { Component } from "react";
import logo from "./weapon-ninja-star2-512.png";
import "./App.css";
import Dojo from "./Dojo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: [],
      dojo: []
    };
  }
  componentDidMount() {
    fetch("https://dojo-sense.herokuapp.com/")
      .then(response => response.json())
      .then(response => {
        this.setState({
          style: response.style,
          dojo: response.dojo
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Dojo data={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
