import React from "react";
import GitHubCard from "./GitHubCard";
import Logos from "./Logos";
import axios from "axios";

import "./App.css";
// const followersArray = ["brandonharris177", " NathanNguyen"];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardInfo: [],
      followersInfo: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/SandraCoburn")
      .then(res => {
        this.setState({
          cardInfo: res.data
        });
        console.log(res);
      })
      .catch(err => console.log(err));
    axios
      .get("https://api.github.com/users/SandraCoburn/followers")
      .then(res => {
        this.setState({
          followersInfo: res.data
        });
        console.log("followers", res);
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log("loading", this.state);
    return (
      <div>
        <header>
          <Logos />
        </header>
        <GitHubCard
          cardInfo={this.state.cardInfo}
          followers={this.state.followersInfo}
        />
      </div>
    );
  }
}

export default App;
