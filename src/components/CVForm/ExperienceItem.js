import "../../styles/ExperienceItem.css";
import React, { Component } from "react";

class ExperienceItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dateFrom, dateTo, title, name, location, description, id } =
      this.props.experienceItem;
    const { clickHandler } = this.props;
    return (
      <div id={id} onClick={clickHandler} className="ExperienceItem">
        <div id={id} onClick={clickHandler} className="ExperienceItem__first">
          <p id={id} onClick={clickHandler} className="ExperienceItem__date">
            {`${dateFrom.toUpperCase()} - ${dateTo.toUpperCase()}`}
          </p>
          <p id={id} onClick={clickHandler} className="ExperienceItem__title">
            {title}
          </p>
        </div>
        <div id={id} onClick={clickHandler} className="ExperienceItem__second">
          <p id={id} onClick={clickHandler} className="ExperienceItem__name">
            {name}
          </p>
          <p
            id={id}
            onClick={clickHandler}
            className="ExperienceItem__location"
          >
            {location}
          </p>
          <p
            id={id}
            onClick={clickHandler}
            className="ExperienceItem__description"
          >
            {description}
          </p>
        </div>
      </div>
    );
  }
}

export default ExperienceItem;
