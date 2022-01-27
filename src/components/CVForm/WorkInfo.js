import "../../styles/WorkInfo.css";
import React, { Component } from "react";

class WorkInfo extends Component {
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
        <h3>Work Experience</h3>
      </div>
    );
  }
}

export default WorkInfo;
