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
    console.log("Create Style Form Data is: ", {
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

  getFormDataCreateDojo() {
    var data = new FormData(document.getElementById("createDojoForm"));
    console.log("Create Dojo Form Data is: ", {
      dojo: data.get("dojo"),
      style: data.get("style"),
      url: data.get("url"),
      latitude: data.get("latitude"),
      longitude: data.get("longitude")
    });
    return {
      dojo: data.get("dojo"),
      style: data.get("style"),
      url: data.get("url"),
      latitude: data.get("latitude"),
      longitude: data.get("longitude")
    };
  }

  getFormDataUpdateStyle() {
    var data = new FormData(document.getElementById("updateStyleForm"));
    console.log("Update Style Form Data is: ", {
      id: data.get("id"),
      style: data.get("style"),
      summary: data.get("summary"),
      video: data.get("video")
    });
    return {
      id: data.get("id"),
      style: data.get("style"),
      summary: data.get("summary"),
      video: data.get("video")
    };
  }

  getFormDataUpdateDojo() {
    var data = new FormData(document.getElementById("updateDojoForm"));
    console.log("Update Dojo Form Data is: ", {
      id: data.get("id"),
      url: data.get("url"),
      latitude: data.get("latitude"),
      longitude: data.get("longitude")
    });
    return {
      id: data.get("id"),
      url: data.get("url"),
      latitude: data.get("latitude"),
      longitude: data.get("longitude")
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
          />
        </main>
      </div>
    );
  }
}

export default App;
