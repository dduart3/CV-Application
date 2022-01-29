import "../../styles/ExperienceItem.css";
import React, { Component } from "react";

class ExperienceItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ExperienceItem">
        <div>
          <p className="ExperienceItem__date">AUG 2019 - JULY 2020</p>
          <p className="ExperienceItem__title">Senior Web Developer</p>
        </div>
        <div>
          <p className="ExperienceItem__name">Google Inc</p>
          <p className="ExperienceItem__location">Los Angeles, CA</p>
          <p className="ExperienceItem__description">
            Aqui me rompi el culo laburando che
          </p>
        </div>
      </div>
    );
  }
}

export default ExperienceItem;
