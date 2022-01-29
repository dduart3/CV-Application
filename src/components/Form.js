import "../styles/Form.css";
import React, { Component } from "react";
import EditButton from "./EditButton";
class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, buttonHandler, formHandler, coords, fields } = this.props;
    return (
      <form id={id} style={{ top: coords.y, left: coords.x }} className="Form">
        {Object.keys(fields).map((field) => {
          return (
            <div key={JSON.stringify(field)}>
              <label htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                onChange={(e) => formHandler(e, id, field)}
                className="Form__input"
                name={field}
              ></input>
            </div>
          );
        })}

        <EditButton buttonHandler={buttonHandler} content="Save"></EditButton>
      </form>
    );
  }
}

export default Form;
