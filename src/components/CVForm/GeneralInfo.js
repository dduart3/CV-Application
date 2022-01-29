import "../../styles/GeneralInfo.css";
import EditButton from "../EditButton";
import Form from "../Form";
import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameForm: {
        visibility: false,
        fields: {
          name: "DAVID DUARTE",
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
    };

    this.toggleStatePropVisibility = this.toggleStatePropVisibility.bind(this);

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

  render() {
    const { nameForm, contactForm } = this.state;
    return (
      <div className="GeneralInfo ">
        <div className="GeneralInfo__name-and-career">
          <h4 className="GeneralInfo__name">{nameForm.fields.name}</h4>
          <h6 className="GeneralInfo__career">{nameForm.fields.career}</h6>
          <EditButton
            buttonHandler={(e) => {
              this.changeStatePropCoords("nameForm", e.clientX, e.clientY);
              this.toggleStatePropVisibility("nameForm");
            }}
            content="Edit"
          />
          {nameForm.visibility && (
            <Form
              id="nameForm"
              fields={nameForm.fields}
              coords={nameForm.coords}
              formHandler={this.changeFieldStatePropOnchange}
              buttonHandler={() => this.toggleStatePropVisibility("nameForm")}
            />
          )}
        </div>
        <div className="GeneralInfo__image">
          <img
            className="img"
            src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
          ></img>
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
              this.changeStatePropCoords(
                "contactForm",
                e.clientX + 100,
                e.clientY - 300
              );
              this.toggleStatePropVisibility("contactForm");
            }}
            content="Edit"
          />
          <div style={{ position: "relative" }}>
            {contactForm.visibility && (
              <Form
                id="contactForm"
                fields={contactForm.fields}
                coords={contactForm.coords}
                formHandler={this.changeFieldStatePropOnchange}
                buttonHandler={(e) => {
                  this.toggleStatePropVisibility("contactForm");
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
