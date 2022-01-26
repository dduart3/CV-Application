import "../styles/Header.css";
import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header-container">
        <h1>CV Application</h1>
      </div>
    );
  }
}

export default Header;
