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
      cardInfo: []
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
  }

  render() {
    console.log("loading", this.state);
    return (
      <div className="App">
        <header>
          <h1>My GitHub</h1>
          <Logos />
        </header>
        <GitHubCard cardInfo={this.state.cardInfo} />
      </div>
    );
  }
}

export default App;
