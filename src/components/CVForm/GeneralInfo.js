import "../../styles/GeneralInfo.css";
import EditButton from "../EditButton";
import Form from "../Form";
import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      nameForm,
      contactForm,
      pictureForm,
      changeFieldStatePropOnchange,
      changeStatePropCoords,
      toggleStatePropVisibility,
    } = this.props;
    return (
      <div className="GeneralInfo ">
        <div className="GeneralInfo__name-and-career">
          <h4 className="GeneralInfo__name">{nameForm.fields.name}</h4>
          <h6 className="GeneralInfo__career">{nameForm.fields.career}</h6>
          <EditButton
            buttonHandler={(e) => {
              changeStatePropCoords("nameForm", e.clientX, e.clientY);
              toggleStatePropVisibility("nameForm");
            }}
            content="Edit"
          />
          {nameForm.visibility && (
            <Form
              id="nameForm"
              fields={nameForm.fields}
              coords={nameForm.coords}
              inputHandler={changeFieldStatePropOnchange}
              buttonHandler={() => toggleStatePropVisibility("nameForm")}
            />
          )}
        </div>
        <div className="GeneralInfo__image">
          <img
            onClick={(e) => {
              changeStatePropCoords("pictureForm", e.clientX, e.clientY);
              toggleStatePropVisibility("pictureForm");
            }}
            className="GeneralInfo__img"
            alt="Person picture"
            src={pictureForm.fields.source}
          ></img>
          {pictureForm.visibility && (
            <Form
              id="pictureForm"
              fields={pictureForm.fields}
              coords={pictureForm.coords}
              inputHandler={changeFieldStatePropOnchange}
              buttonHandler={() => toggleStatePropVisibility("pictureForm")}
            ></Form>
          )}
        </div>
        <div className="GeneralInfo__about-container">
          <h5 className="GeneralInfo__about">About me</h5>
          <p className="GeneralInfo__description">{contactForm.fields.about}</p>
        </div>
        <div className="GeneralInfo__contact">
          <div className="GeneralInfo__website Contact">
            <i className="fas fa-globe GeneralInfo__icon"></i>
            <p>{contactForm.fields.page}</p>
          </div>
          <div className="GeneralInfo__location Contact">
            <i className="fas fa-map-marker-alt GeneralInfo__icon"></i>
            <p>{contactForm.fields.location}</p>
          </div>

          <div className="GeneralInfo__phone Contact">
            <i className="fas fa-phone GeneralInfo__icon"></i>
            <p>{contactForm.fields.phone}</p>
          </div>

          <div className="GeneralInfo__email Contact">
            <i className="far fa-envelope GeneralInfo__icon"></i>
            <p>{contactForm.fields.email}</p>
          </div>
          <EditButton
            buttonHandler={(e) => {
              changeStatePropCoords(
                "contactForm",
                e.clientX + 100,
                e.clientY - 300
              );
              toggleStatePropVisibility("contactForm");
            }}
            content="Edit"
          />
          <div style={{ position: "relative" }}>
            {contactForm.visibility && (
              <Form
                id="contactForm"
                fields={contactForm.fields}
                coords={contactForm.coords}
                inputHandler={changeFieldStatePropOnchange}
                buttonHandler={(e) => {
                  toggleStatePropVisibility("contactForm");
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
