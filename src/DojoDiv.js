import React from "react";
import Map from "./Map";

const DojoDiv = props => {
  function togglePreview(event) {
    const preview = document.querySelector(`#${event.target.textContent}`);
    preview.classList.toggle("hidden");
  }
  return props.data.style.map((item, index) => {
    return (
      <div className="dojo-div">
        <h3>{item.style} (id#{item.id})</h3>
        <iframe title={item.style} src={item.video} alt={item.style} />
        <p>{item.summary}</p>
        <h4>Click the button to see {item.style} dojos in Colorado</h4>
        <button onClick={togglePreview}>{item.style}</button>
        {props.data.dojo.map((item2, index) => {
          if (item.style === item2.style) {
            return (
              <div id={item.style} className="hidden">
                <h4>{item2.dojo} (id#{item2.id})</h4>
                <a href={item2.url}>{item2.dojo} Home page</a>
                <Map lat={item2.latitude} long={item2.longitude} dojo={item2.dojo} />
              </div>
            );
          }
        })}
      </div>
    );
  });
};

export default DojoDiv;
