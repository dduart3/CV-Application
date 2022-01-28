import "../styles/EditButton.css";
import React, { Component } from "react";

class EditButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { content, buttonHandler } = this.props;
    return (
      <button onClick={buttonHandler} type="button" className="EditButton">
        {content}
      </button>
    );
  }
}

export default EditButton;
