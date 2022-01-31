import "../styles/Form.css";
import React, { Component } from "react";
import EditButton from "./EditButton";
class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, buttonHandler, inputHandler, coords, fields } = this.props;
    return (
      <form id={id} style={{ top: coords.y, left: coords.x }} className="Form">
        {fields &&
          Object.keys(fields).map((field) => {
            if (field !== "id") {
              return (
                <div key={JSON.stringify(field)}>
                  <label htmlFor={field}>
                    {field
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, function (str) {
                        return str.toUpperCase();
                      })}
                  </label>
                  <input
                    onChange={(e) => inputHandler(e, id, field)}
                    className="Form__input"
                    name={field}
                  ></input>
                </div>
              );
            }
          })}

        <EditButton buttonHandler={buttonHandler} content="Save"></EditButton>
      </form>
    );
  }
}

export default Form;
