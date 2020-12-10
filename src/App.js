import "./App.css";
import { Component } from "react";
import test from "./logo.svg";
import tree from "./resources/xmastree.png"



class App extends Component {
  render() {
    return (
      <div className="App">
        {[...Array(25)].map((e, i) =>
          <Dayframe day={i + 1} key={i} />
        )}
      </div>
    );
  }
}

class Dayframe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: this.props.day,
      doorStatus: "close",
    };
    this.changeDoorStatus = this.changeDoorStatus.bind(this);
  }

  checkDate() {
    var now = new Date()
    if (now.getDate() >= this.state.day) {
      return true;
    } else {
      return false;
    }
  }

  changeDoorStatus() {
    var canOpen = this.checkDate()
    if (canOpen) {
      if (this.state.doorStatus === "close") {
        this.setState({
          doorStatus: "open",
        });
      } else {
        this.setState({
          doorStatus: "close",
        });
      }
    }
  }

  render() {
    return (
      <div className="DoorContainer">
        <div
          className={`Door ${this.state.doorStatus}`}
          onClick={this.changeDoorStatus}
        >
          <div className="FrontDoor">
            <p>Day {this.state.day}</p>
            <img className="Tree" src={tree} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
