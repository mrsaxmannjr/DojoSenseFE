import React from "react";

function Form(props) {
  return (
    <div>
      <form id="createStyleForm" onSubmit={props.getFormDataCreateStyle}>
        <label htmlFor="style">New Style</label>
        <input type="text" name="style" />
        <label htmlFor="summary">Summary of this Style</label>
        <textarea name="summary" rows="8" cols="40" />
        <label htmlFor="video">Enter URL of Style video</label>
        <input type="text" name="video" />
        <input type="submit" name="submit" value="Submit" />
      </form>

    </div>
  );
}

export default Form;
