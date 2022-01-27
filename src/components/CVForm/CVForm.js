import "../../styles/CVForm.css";
import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import WorkInfo from "./WorkInfo";

class CVForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CVForm">
        <GeneralInfo></GeneralInfo>
        <div className="Experience">
          <div className="Experience__decoration-container">
            <div className="Experience__decoration-subcontainer"></div>
            <div className="Experience__decoration-box"></div>
          </div>
          <EducationInfo></EducationInfo>
          <WorkInfo></WorkInfo>
        </div>
      </div>
    );
  }
}

export default CVForm;
