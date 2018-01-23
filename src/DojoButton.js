import React from "react";

class DojoButton extends React.Component {
  togglePreview() {
    const preview = document.querySelector("#application-preview");
    preview.classList.toggle("hidden");
    preview.textContent = "dojo here";
  }
  render() {
    return (
      <div>
        <button id="preview-toggle" onClick={this.togglePreview} >
          Dojo
        </button>
        <section id="application-preview" className="hidden" />
      </div>
    );
  }
}

export default DojoButton;