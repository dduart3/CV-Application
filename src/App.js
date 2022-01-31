import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import CVForm from "./components/CVForm/CVForm";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-header">
        <Header></Header>

        <CVForm />
      </div>
    );
  }
}

export default App;
