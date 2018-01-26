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
    this.submitHandlerCreateDojo = this.submitHandlerCreateDojo.bind(this);
    this.submitHandlerUpdateStyle = this.submitHandlerUpdateStyle.bind(this);
    this.submitHandlerUpdateDojo = this.submitHandlerUpdateDojo.bind(this);
    this.submitHandlerListStyle = this.submitHandlerListStyle.bind(this);
    this.submitHandlerListDojo = this.submitHandlerListDojo.bind(this);
    this.submitHandlerDeleteStyle = this.submitHandlerDeleteStyle.bind(this);
    this.submitHandlerDeleteDojo = this.submitHandlerDeleteDojo.bind(this);
    this.submitHandlerListAll = this.submitHandlerListAll.bind(this);
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
    var form = {
      style: data.get("style"),
      summary: data.get("summary"),
      video: data.get("video")
    };
    document.getElementById("createStyleForm").reset()
    return form;
  }

  getFormDataCreateDojo() {
    var data = new FormData(document.getElementById("createDojoForm"));
    var form = {
      dojo: data.get("dojo"),
      style: data.get("style"),
      url: data.get("url"),
      latitude: data.get("latitude"),
      longitude: data.get("longitude")
    };
    document.getElementById("createDojoForm").reset()
    return form;
  }

  getFormDataUpdateStyle() {
    var data = new FormData(document.getElementById("updateStyleForm"));
    var form = {
      id: data.get("id"),
      style: data.get("style"),
      summary: data.get("summary"),
      video: data.get("video")
    };
    document.getElementById("updateStyleForm").reset()
    return form;
  }

  getFormDataUpdateDojo() {
    var data = new FormData(document.getElementById("updateDojoForm"));
    var form = {
      id: data.get("id"),
      dojo: data.get("dojo"),
      style: data.get("style"),
      url: data.get("url"),
      latitude: data.get("latitude"),
      longitude: data.get("longitude")
    };
    document.getElementById("updateDojoForm").reset()
    return form;
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

  submitHandlerCreateDojo(event) {
    event.preventDefault();
    fetch("https://dojo-sense.herokuapp.com/dojo", {
      method: "POST",
      body: JSON.stringify(this.getFormDataCreateDojo()),
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(response => this.componentDidMount())
      .catch(err => console.log(err));
  }

  submitHandlerUpdateStyle(event) {
    event.preventDefault();
    fetch("https://dojo-sense.herokuapp.com/style/" + document.getElementById("styleID").value, {
      method: "PUT",
      body: JSON.stringify(this.getFormDataUpdateStyle()),
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(response => this.componentDidMount())
      .catch(err => console.log(err));
  }

  submitHandlerUpdateDojo(event) {
    event.preventDefault();
    fetch("https://dojo-sense.herokuapp.com/dojo/" + document.getElementById("dojoID").value, {
      method: "PUT",
      body: JSON.stringify(this.getFormDataUpdateDojo()),
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(response => this.componentDidMount())
      .catch(err => console.log(err));
  }

  submitHandlerListStyle(event) {
    event.preventDefault();
    fetch("https://dojo-sense.herokuapp.com/style/" + document.getElementById("listStyleID").value)
      .then(response => {
        console.log("initial", response);
        return response.json();
      })
      .then(response => {
        console.log("json response", response);
        this.setState({
          style: response.style,
        });
        console.log("the state is: ", this.state);
      })
      .catch(err => console.log(err));
  }

  submitHandlerListDojo(event) {
    event.preventDefault();
    fetch("https://dojo-sense.herokuapp.com/dojo/" + document.getElementById("listDojoID").value)
      .then(response => {
        console.log("initial", response);
        return response.json();
      })
      .then(response => {
        console.log("json response", response);
        this.setState({
          style: response.dojo,
        });
        console.log("the state is: ", this.state);
      })
      .catch(err => console.log(err));
  }

  submitHandlerDeleteStyle(event) {
    event.preventDefault();
    fetch("https://dojo-sense.herokuapp.com/style/" + document.getElementById("deleteStyleID").value, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(response => this.componentDidMount())
      .catch(err => console.log(err));
  }

  submitHandlerDeleteDojo(event) {
    event.preventDefault();
    fetch("https://dojo-sense.herokuapp.com/dojo/" + document.getElementById("deleteDojoID").value, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(response => this.componentDidMount())
      .catch(err => console.log(err));
  }

  submitHandlerListAll(event) {
    event.preventDefault();
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
          <Aside
            getFormDataCreateStyle={this.submitHandlerCreateStyle}
            getFormDataCreateDojo={this.submitHandlerCreateDojo}
            getFormDataUpdateStyle={this.submitHandlerUpdateStyle}
            getFormDataUpdateDojo={this.submitHandlerUpdateDojo}
            getFormDataListStyle={this.submitHandlerListStyle}
            getFormDataListDojo={this.submitHandlerListDojo}
            getFormDataDeleteStyle={this.submitHandlerDeleteStyle}
            getFormDataDeleteDojo={this.submitHandlerDeleteDojo}
            getFormDataListAll={this.submitHandlerListAll}
          />
        </main>
      </div>
    );
  }
}

export default App;
