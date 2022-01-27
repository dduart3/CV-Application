import "../../styles/EducationInfo.css";
import React, { Component } from "react";

class EducationInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onSubmitInfo = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div onSubmit={this.onSubmitInfo} className="EducationInfo">
        <h3>Education Experience</h3>
      </div>
    );
  }
}

export default EducationInfo;
