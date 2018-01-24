import React, { Component } from "react";
import logo from "./weapon-ninja-star2-512.png";
import "./App.css";
import Dojo from "./Dojo";
import { Aside } from "./Aside";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: [],
      dojo: [],
      data: []
    };
    this.getData = this.getData.bind(this);
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
  getData(formData) {
    var newFormData = this.state.data;
    newFormData.unshift(formData);
    this.setState({ data: newFormData });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WELCOME TO DOJO SENSE!</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dojo data={this.state} />
          <Aside getFormData={this.getData} />
        </main>
      </div>
    );
  }
}

export default App;
