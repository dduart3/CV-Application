import "../../styles/CVForm.css";
import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import WorkInfo from "./WorkInfo";
import uniqid from "uniqid";
const cloneDeep = require("clone-deep");

class CVForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameForm: {
        visibility: false,
        fields: {
          name: "JOHN DOE",
          career: "FRONT END DEVELOPER",
        },
        coords: {
          x: 0,
          y: 0,
        },
      },
      contactForm: {
        visibility: false,
        fields: {
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus tristique lobortis. Fusce varius dolor nec lectus blandit, porta vestibulum magna porttitor.Suspendisse ut bibendum nibh. ",
          page: "samplepage.com",
          location: "Maracaibo, Venezuela",
          phone: "+58 1234567",
          email: "sampleemail@email.com",
        },
        coords: {
          x: 0,
          y: 0,
        },
      },

      pictureForm: {
        visibility: false,
        fields: {
          source:
            "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg",
        },
        coords: {
          x: 0,
          y: 0,
        },
      },

      educationForm: {
        visibility: false,
        coords: {
          x: 0,
          y: 0,
        },
      },

      workForm: {
        visibility: false,
        coords: {
          x: 0,
          y: 0,
        },
      },

      experienceItem: {
        id: uniqid(),
        dateFrom: "",
        dateTo: "",
        title: "",
        name: "",
        location: "",
        description: "",
      },
      educationExperienceItems: [
        {
          id: uniqid(),
          dateFrom: "AUG 2020",
          dateTo: "JULY 2021",
          title: "B.S. Computer Science",
          name: "Fake University",
          location: "Fake City, FS",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed feugiat arcu, in rhoncus nibh.  ",
        },
      ],
      workExperienceItems: [
        {
          id: uniqid(),
          dateFrom: "JULY 201",
          dateTo: "",
          title: "Jr. Front End Developer",
          name: "Fake Job",
          location: "Fake City, FS",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed feugiat arcu, in rhoncus nibh.  ",
        },
      ],
    };

    this.initialState = cloneDeep(this.state);

    this.toggleStatePropVisibility = this.toggleStatePropVisibility.bind(this);
    this.changeStatePropCoords = this.changeStatePropCoords.bind(this);
    this.changeStatePropOnchange = this.changeStatePropOnchange.bind(this);
    this.resetStateProp = this.resetStateProp.bind(this);
    this.addItemToStatePropList = this.addItemToStatePropList.bind(this);
    this.removeItemFromStatePropList =
      this.removeItemFromStatePropList.bind(this);
    this.changeFieldStatePropOnchange =
      this.changeFieldStatePropOnchange.bind(this);
  }

  changeFieldStatePropOnchange = (e, prop, field) => {
    e.preventDefault();

    if (this.state.hasOwnProperty(prop)) {
      this.setState((prevState) => ({
        [prop]: {
          ...prevState[prop],
          fields: {
            ...prevState[prop]["fields"],
            [field]: e.target.value,
          },
        },
      }));
    } else {
      try {
        throw new Error("Invalid state property");
      } catch (e) {
        console.error(e.name + ": " + e.message);
      }
    }
  };

  toggleStatePropVisibility = (prop) => {
    if (this.state.hasOwnProperty(prop)) {
      if (this.state[prop].visibility) {
        this.setState((prevState) => ({
          [prop]: {
            ...prevState[prop],
            visibility: false,
          },
        }));
      } else {
        this.setState((prevState) => ({
          [prop]: {
            ...prevState[prop],
            visibility: true,
          },
        }));
      }
    } else {
      try {
        throw new Error("Invalid state property");
      } catch (e) {
        console.error(e.name + ": " + e.message);
      }
    }
  };

  changeStatePropCoords = (prop, x, y) => {
    if (this.state.hasOwnProperty(prop)) {
      this.setState((prevState) => ({
        [prop]: {
          ...prevState[prop],
          coords: {
            x,
            y,
          },
        },
      }));
    } else {
      try {
        throw new Error("Invalid state property");
      } catch (e) {
        console.error(e.name + ": " + e.message);
      }
    }
  };

  changeStatePropOnchange = (e, prop, field) => {
    e.preventDefault();

    if (this.state.hasOwnProperty(prop)) {
      this.setState((prevState) => ({
        [prop]: {
          ...prevState[prop],
          [field]: e.target.value,
        },
      }));
    } else {
      try {
        throw new Error("Invalid state property");
      } catch (e) {
        console.error(e.name + ": " + e.message);
      }
    }
  };

  resetStateProp = (prop) => {
    if (this.state.hasOwnProperty(prop)) {
      this.setState(() => ({
        [prop]: {
          ...this.initialState[prop],
          id: uniqid(),
        },
      }));
    } else {
      try {
        throw new Error("Invalid state property");
      } catch (e) {
        console.error(e.name + ": " + e.message);
      }
    }
  };

  addItemToStatePropList = (e, prop, item) => {
    if (this.state.hasOwnProperty(prop)) {
      this.setState((prevState) => ({
        [prop]: prevState[prop].concat(prevState[item]),
      }));
      this.resetStateProp(item);
      console.log(this.state);
    } else {
      try {
        throw new Error("Invalid state property");
      } catch (e) {
        console.error(e.name + ": " + e.message);
      }
    }
  };

  removeItemFromStatePropList = (e, prop) => {
    if (this.state.hasOwnProperty(prop)) {
      this.setState((prevState) => ({
        [prop]: prevState[prop].filter((element) => {
          return element.id != e.target.id;
        }),
      }));
    } else {
      try {
        throw new Error("Invalid state property");
      } catch (e) {
        console.error(e.name + ": " + e.message);
      }
    }
  };

  render() {
    const {
      educationForm,
      experienceItem,
      educationExperienceItems,
      workExperienceItems,
      workForm,
      nameForm,
      contactForm,
      pictureForm,
    } = this.state;
    return (
      <div id="topdf" className="CVForm">
        <GeneralInfo
          toggleStatePropVisibility={this.toggleStatePropVisibility}
          changeFieldStatePropOnchange={this.changeFieldStatePropOnchange}
          changeStatePropCoords={this.changeStatePropCoords}
          nameForm={nameForm}
          contactForm={contactForm}
          pictureForm={pictureForm}
        ></GeneralInfo>
        <div className="Experience">
          <div className="Experience__decoration-container">
            <div className="Experience__decoration-subcontainer"></div>
            <div className="Experience__decoration-box"></div>
          </div>
          <EducationInfo
            toggleStatePropVisibility={this.toggleStatePropVisibility}
            changeStatePropCoords={this.changeStatePropCoords}
            changeStatePropOnchange={this.changeStatePropOnchange}
            addItemToStatePropList={this.addItemToStatePropList}
            removeItemFromStatePropList={this.removeItemFromStatePropList}
            educationForm={educationForm}
            experienceItem={experienceItem}
            educationExperienceItems={educationExperienceItems}
          ></EducationInfo>
          <WorkInfo
            toggleStatePropVisibility={this.toggleStatePropVisibility}
            changeStatePropCoords={this.changeStatePropCoords}
            changeStatePropOnchange={this.changeStatePropOnchange}
            addItemToStatePropList={this.addItemToStatePropList}
            removeItemFromStatePropList={this.removeItemFromStatePropList}
            workForm={workForm}
            experienceItem={experienceItem}
            workExperienceItems={workExperienceItems}
          ></WorkInfo>
        </div>
        <div className="CVForm__footer"></div>
      </div>
    );
  }
}

export default CVForm;
