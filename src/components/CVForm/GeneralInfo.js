import "../../styles/GeneralInfo.css";
import EditButton from "../EditButton";
import Form from "../Form";
import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "DAVID DUARTE",
      career: "FRONT END DEVELOPER",
      nameFormVisibility: false,
    };

    this.toggleStateProp = this.toggleStateProp.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.value.toUpperCase(),
    });
  };

  toggleStateProp = (e, prop) => {
    if (this.state.hasOwnProperty(prop)) {
      if (this.state[prop]) {
        this.setState({ [prop]: false });
      } else {
        this.setState({ [prop]: true });
      }
    } else {
      try {
        throw new Error("Invalid state property");
      } catch (e) {
        console.error(e.name + ": " + e.message);
      }
    }
  };

  render() {
    const { nameFormVisibility } = this.state;
    return (
      <div className="GeneralInfo ">
        <div className="GeneralInfo__name-and-career">
          <h4 className="GeneralInfo__name">{this.state.name}</h4>
          <h6 className="GeneralInfo__career">{this.state.career}</h6>
          <EditButton buttonHandler={this.toggleStateProp} content="Edit" />
          {nameFormVisibility && (
            <Form buttonHandler={this.toggleStateProp("nameFormVisibility")} />
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
          <p className="GeneralInfo__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            faucibus tristique lobortis. Fusce varius dolor nec lectus blandit,
            porta vestibulum magna porttitor. Suspendisse ut bibendum nibh.
            Aliquam suscipit, enim ut egestas elementum, ipsum nisl tempor
            lacus, vel rutrum arcu mi efficitur tortor. Pellentesque fermentum
            commodo ex a interdum. Fusce at interdum elit, in maximus lacus.
          </p>
        </div>
        <div className="GeneralInfo__contact">
          <div className="GeneralInfo__website contact">
            <i className="fas fa-globe GeneralInfo__icon"></i>
            <p>samplepage.com</p>
          </div>
          <div className="GeneralInfo__location contact">
            <i className="fas fa-map-marker-alt GeneralInfo__icon"></i>
            <p>Maracaibo, Venezuela</p>
          </div>

          <div className="GeneralInfo__phone contact">
            <i className="fas fa-phone GeneralInfo__icon"></i>
            <p>+58 1234567</p>
          </div>

          <div className="GeneralInfo__email contact">
            <i className="far fa-envelope GeneralInfo__icon"></i>
            <p>sampleemail@email.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
