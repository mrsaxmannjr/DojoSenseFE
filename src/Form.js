import React from "react";

export class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newData: {}
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    var newObj = {
      style: event.target[0].value,
      video: event.target[1].value,
      summary: event.target[2].value,
    };
    this.props.getFormData(newObj);
    event.target.reset();
  }
  render() {
    return (
      <div>
      <form className="style-form" onSubmit={this.submitHandler}>
        <label htmlFor="style">New Style</label>
        <input type="text" name="style" />
        <label htmlFor="video">Enter URL of Style video</label>
        <input type="text" name="video" />
        <label htmlFor="summary">Summary of this Style</label>
        <textarea name="summary" rows="8" cols="40"></textarea>
        <input type="submit" name="submit" value="Submit" />
      </form>

      <form className="style-form" onSubmit={this.submitHandler}>
        <label htmlFor="style">New Style</label>
        <input type="text" name="style" />
        <label htmlFor="video">Enter URL of Style video</label>
        <input type="text" name="video" />
        <label htmlFor="summary">Summary of this Style</label>
        <textarea name="summary" rows="8" cols="40"></textarea>
        <input type="submit" name="submit" value="Submit" />
        </form>
    </div>
    )
  }
}

