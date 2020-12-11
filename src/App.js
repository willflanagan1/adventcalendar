import "./App.css";
import { Component } from "react";
import tree from "./resources/xmastree.png";
import header from "./resources/header.png";
import snowman from "./resources/snowman.png";
import { Grid, Box } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Snowflakes></Snowflakes>
        <AppHeader></AppHeader>
        <Grid container className="DoorGrid" spacing={2}>
          <Grid item>
            <Grid container justify="center" spacing={7}>
              {[...Array(25)].map((e, i) => (
                <Dayframe day={i + 1} key={i} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function Snowflakes() {
  return (
    <div class="snowflakes" aria-hidden="true">
        <div class="snowflake">
        ❅
        </div>
        <div class="snowflake">
        ❆
        </div>
        <div class="snowflake">
        ❅
        </div>
        <div class="snowflake">
        ❆
        </div>
        <div class="snowflake">
        ❅
        </div>
        <div class="snowflake">
        ❆
        </div>
        <div class="snowflake">
          ❅
        </div>
        <div class="snowflake">
          ❆
        </div>
        <div class="snowflake">
          ❅
        </div>
        <div class="snowflake">
          ❆
        </div>
        <div class="snowflake">
          ❅
        </div>
        <div class="snowflake">
          ❆
        </div>
      </div>
  )
}

class AppHeader extends Component {
  render() {
    return (
      <div className="HeaderContainer">
        <div class="ImageContainer">
          <img className="SnowmanImg" src={snowman}></img>
        </div>
        <div class="ImageContainer">
          <img className="TitleImg" src={header}></img>
        </div>
        <div class="ImageContainer">
          <img className="SnowmanImg flipped" src={snowman}></img>
        </div>
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
    var now = new Date();
    return now.getDate() >= this.state.day;
  }

  changeDoorStatus() {
    var canOpen = this.checkDate();
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
      <Grid item className="DoorContainer">
        <div
          className={`Door ${this.state.doorStatus}`}
          onClick={this.changeDoorStatus}
        >
          <p className="DayTitle">Day {this.state.day}</p>
          <img className="Tree" src={tree} />
        </div>
      </Grid>
    );
  }
}

class GiftModal extends Component {}

export default App;
