import React from "react";
import DojoButton from "./DojoButton";

const DojoDiv = props => {
  console.log(props.data);
  return props.data.style.map((item, index) => {
    return (
      <div className="dojo-div">
        <h3>{item.style}</h3>
        <iframe title={item.style} src={item.video} alt={item.style} />
        <p>{item.summary}</p>
        <DojoButton data={props.data} />
      </div>
    );
  });
};

export default DojoDiv;
