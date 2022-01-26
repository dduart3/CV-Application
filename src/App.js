import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-header">
        <Header />
      </div>
    );
  }
}

export default App;
