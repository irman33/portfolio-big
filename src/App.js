import React, { Component } from "react";
import "./reboot.css";
import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="site-wrapper">
          <Nav />
          <Intro />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
