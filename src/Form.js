import React from "react";

function Form(props) {
  return (
    <div>
      <form id="createStyleForm" onSubmit={props.getFormDataCreateStyle}>
        <h3 className="form-title">ADD A STYLE</h3>
        <label htmlFor="style">New Style</label>
        <input type="text" name="style" />
        <label htmlFor="summary">Summary of this Style</label>
        <textarea name="summary" rows="8" cols="40" />
        <label htmlFor="video">Enter URL of Style video</label>
        <input type="text" name="video" />
        <input type="submit" name="submit" value="Submit" />
      </form>
      <form id="createDojoForm" onSubmit={props.getFormDataCreateDojo}>
        <h3 className="form-title">ADD DOJO TO AN EXISITNG STYLE</h3>
        <label htmlFor="dojo">New Dojo</label>
        <input type="text" name="dojo" />
        <label htmlFor="style">Style</label>
        <input type="text" name="style" />
        <label htmlFor="url">Enter URL for the dojo</label>
        <input type="text" name="url" />
        <label htmlFor="latitude">Enter latitude of dojo</label>
        <input type="float" name="latitude" />
        <label htmlFor="longitude">Enter longitude of dojo</label>
        <input type="float" name="longitude" />
        <input type="submit" name="submit" value="Submit" />
      </form>
      <form id="updateStyleForm" onSubmit={props.getFormDataUpdateStyle}>
        <h3 className="form-title">UPDATE A STYLE</h3>
        <label htmlFor="id">Enter id# of Style to update</label>
        <input id="styleID" type="text" name="id" />
        <label htmlFor="summary">Summary of this Style</label>
        <textarea name="summary" rows="8" cols="40" />
        <label htmlFor="video">Enter URL of Style video</label>
        <input type="text" name="video" />
        <input type="submit" name="submit" value="Submit" />
      </form>
      <form id="updateDojoForm" onSubmit={props.getFormDataUpdateDojo}>
        <h3 className="form-title">UPDATE A DOJO</h3>
        <label htmlFor="id">Enter id# of Dojo to update</label>
        <input id="dojoID" type="text" name="id" />
        <label htmlFor="url">Enter URL update for the dojo</label>
        <input type="text" name="url" />
        <label htmlFor="latitude">Enter latitude update for dojo</label>
        <input type="float" name="latitude" />
        <label htmlFor="longitude">Enter longitude update for dojo</label>
        <input type="float" name="longitude" />
        <input type="submit" name="submit" value="Submit" />
      </form>
      <form id="listStyleForm" onSubmit={props.getFormDataListStyle}>
        <h3 className="form-title">CHOOSE A STYLE</h3>
        <label htmlFor="id">Enter id# of Style to display</label>
        <input id="listStyleID" type="text" name="id" />
        <input type="submit" name="submit" value="Submit" />
      </form>
      <form id="listDojoForm" onSubmit={props.getFormDataListDojo}>
        <h3 className="form-title">CHOOSE A DOJO</h3>
        <label htmlFor="id">Enter id# of Dojo to display</label>
        <input id="listDojoID" type="text" name="id" />
        <input type="submit" name="submit" value="Submit" />
      </form>
      <form id="deleteStyleForm" onSubmit={props.getFormDataDeleteStyle}>
        <h3 className="form-title">CHOOSE A STYLE TO DELETE</h3>
        <label htmlFor="id">Enter id# of Style to delete</label>
        <input id="deleteStyleID" type="text" name="id" />
        <input type="submit" name="submit" value="Submit" />
      </form>
      <form id="deleteDojoForm" onSubmit={props.getFormDataDeleteDojo}>
        <h3 className="form-title">CHOOSE A DOJO TO DELETE</h3>
        <label htmlFor="id">Enter id# of Dojo to delete</label>
        <input id="deleteDojoID" type="text" name="id" />
        <input type="submit" name="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
