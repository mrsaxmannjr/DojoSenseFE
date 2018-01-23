import React from "react";
import DojoDiv from "./DojoDiv";

class Dojo extends React.Component {
  render() {
    return (
      <div className="dojo-list">
        <DojoDiv data={this.props.data} />
      </div>
    );
  }
}

export default Dojo;
