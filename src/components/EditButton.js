import "../styles/EditButton.css";
import React, { Component } from "react";

class EditButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { content, buttonHandler, styles } = this.props;
    return (
      <button
        style={styles}
        onClick={buttonHandler}
        type="button"
        className="EditButton"
      >
        {content}
      </button>
    );
  }
}

export default EditButton;
