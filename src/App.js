import React, { Component } from "react";
import logo from "./weapon-ninja-star2-512.png";
import "./App.css";
import Dojo from "./Dojo";
import Aside from "./Aside";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: [],
      dojo: []
    };
    this.submitHandlerCreateStyle = this.submitHandlerCreateStyle.bind(this);
  }
  componentDidMount() {
    fetch("https://dojo-sense.herokuapp.com/")
      .then(response => response.json())
      .then(response => {
        this.setState({
          style: response.style,
          dojo: response.dojo
        });
        console.log("the state is: ", this.state);
      })
      .catch(err => console.log(err));
  }

  getFormDataCreateStyle() {
    var data = new FormData(document.getElementById("createStyleForm"));
    console.log("Form Data is: ", {
      style: data.get("style"),
      summary: data.get("summary"),
      video: data.get("video")
    });
    return {
      style: data.get("style"),
      summary: data.get("summary"),
      video: data.get("video")
    };
  }

  submitHandlerCreateStyle(event) {
    event.preventDefault();
    fetch("https://dojo-sense.herokuapp.com/style", {
      method: "POST",
      body: JSON.stringify(this.getFormDataCreateStyle()),
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(response => this.componentDidMount())
      .catch(err => console.log(err));
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
          <Aside getFormDataCreateStyle={this.submitHandlerCreateStyle} />
        </main>
      </div>
    );
  }
}

export default App;
