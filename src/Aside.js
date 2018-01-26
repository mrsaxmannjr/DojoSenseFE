import React from "react";
import Form from "./Form";

class Aside extends React.Component {
  render() {
    return (
      <aside id="side-bar">
        <Form
          getFormDataCreateStyle={this.props.getFormDataCreateStyle}
          getFormDataCreateDojo={this.props.getFormDataCreateDojo}
          getFormDataUpdateStyle={this.props.getFormDataUpdateStyle}
          getFormDataUpdateDojo={this.props.getFormDataUpdateDojo}
          getFormDataListStyle={this.props.getFormDataListStyle}
          getFormDataListDojo={this.props.getFormDataListDojo}
          getFormDataDeleteStyle={this.props.getFormDataDeleteStyle}
          getFormDataDeleteDojo={this.props.getFormDataDeleteDojo}
          getFormDataListAll={this.props.getFormDataListAll}
        />
      </aside>
    );
  }
}

export default Aside;
