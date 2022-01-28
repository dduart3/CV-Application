import "../styles/Form.css";
import React, { Component } from "react";
import EditButton from "./EditButton";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonHandler } = this.props;
    return (
      <form className="Form">
        <label htmlFor="name">Your name</label>
        <input className="Form__input" name="name" type="text"></input>

        <label htmlFor="career">Your title</label>
        <input className="Form__input" name="tile" type="text"></input>

        <EditButton buttonHandler={buttonHandler} content="Save"></EditButton>
      </form>
    );
  }
}

export default Form;
