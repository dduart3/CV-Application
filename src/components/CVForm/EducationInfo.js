import "../../styles/EducationInfo.css";
import ExperienceItem from "./ExperienceItem";
import EditButton from "../EditButton";
import React, { Component } from "react";
import Form from "../Form";

class EducationInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      educationForm,
      experienceItem,
      educationExperienceItems,
      toggleStatePropVisibility,
      changeStatePropCoords,
      changeStatePropOnchange,
      addItemToStatePropList,
      removeItemFromStatePropList,
    } = this.props;
    return (
      <div className="EducationInfo">
        <h3>Education</h3>
        <div className="EducationInfo__items">
          <EditButton
            buttonHandler={(e) => {
              changeStatePropCoords("educationForm", e.clientX, e.clientY);
              toggleStatePropVisibility("educationForm");
            }}
            content="Add"
            styles={{ alignSelf: "flex-end", marginRight: "2vw" }}
          ></EditButton>

          {educationForm.visibility && (
            <Form
              id="experienceItem"
              fields={experienceItem}
              inputHandler={changeStatePropOnchange}
              buttonHandler={(e) => {
                addItemToStatePropList(
                  e,
                  "educationExperienceItems",
                  "experienceItem"
                );
                toggleStatePropVisibility("educationForm");
              }}
              coords={educationForm.coords}
            ></Form>
          )}

          {educationExperienceItems &&
            educationExperienceItems.map((item) => {
              return (
                <ExperienceItem
                  clickHandler={(e) =>
                    removeItemFromStatePropList(e, "educationExperienceItems")
                  }
                  experienceItem={item}
                ></ExperienceItem>
              );
            })}
        </div>
      </div>
    );
  }
}

export default EducationInfo;
