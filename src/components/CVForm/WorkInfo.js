import "../../styles/WorkInfo.css";
import ExperienceItem from "./ExperienceItem";
import EditButton from "../EditButton";
import React, { Component } from "react";
import Form from "../Form";

class WorkInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      workForm,
      experienceItem,
      workExperienceItems,
      toggleStatePropVisibility,
      changeStatePropCoords,
      changeStatePropOnchange,
      addItemToStatePropList,
      removeItemFromStatePropList,
    } = this.props;
    return (
      <div className="WorkInfo">
        <h3>Work Experience</h3>
        <div className="WorkInfo__items">
          <EditButton
            buttonHandler={(e) => {
              changeStatePropCoords("workForm", e.clientX, e.clientY - 350);
              toggleStatePropVisibility("workForm");
            }}
            content="Add"
            styles={{ alignSelf: "flex-end", marginRight: "2vw" }}
          ></EditButton>

          {workForm.visibility && (
            <Form
              id="experienceItem"
              fields={experienceItem}
              inputHandler={changeStatePropOnchange}
              buttonHandler={(e) => {
                addItemToStatePropList(
                  e,
                  "workExperienceItems",
                  "experienceItem"
                );
                toggleStatePropVisibility("workForm");
              }}
              coords={workForm.coords}
            ></Form>
          )}

          {workExperienceItems &&
            workExperienceItems.map((item) => {
              return (
                <ExperienceItem
                  clickHandler={(e) =>
                    removeItemFromStatePropList(e, "workExperienceItems")
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

export default WorkInfo;
