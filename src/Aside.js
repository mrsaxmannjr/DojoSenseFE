import React from "react";
import Form from "./Form";

class Aside extends React.Component {

  render() {
    return (
      <aside id="side-bar">
        <h3>Add a Style</h3>
        <Form getFormDataCreateStyle={this.props.getFormDataCreateStyle} />
      </aside>
    );
  }
}

export default Aside;