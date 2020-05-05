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
      followersInfo: [],
      followerInfo: [],
      query: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.github.com/users/SandraCoburn"
      )
      .then((res) => {
        this.setState({
          cardInfo: res.data,
        });
        console.log("my info", res);
      })
      .catch((err) => console.log(err));
    //This call will get the contributions shart, added the cors proxy to get rid of cors errors
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://github.com/users/SandraCoburn/contributions"
      )
      .then((res) => {
        console.log("contributions data", res);
      })
      .catch((err) => console.log(err));
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.github.com/users/SandraCoburn/followers"
      )
      .then((res) => {
        this.setState({
          followersInfo: res.data,
        });
        console.log("followers", res);
        //This will go through all followers and make an API call for each of them to get personal info
        res.data.forEach((person) => {
          axios
            .get(
              `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${person.login}`
            )
            .then((res) => {
              //"joined" is a new array to pass info from state, one follower at a time
              let joined = this.state.followerInfo.concat(res.data);
              this.setState({
                followerInfo: joined,
              });
              console.log("follower", res);
            });
        });
      })
      .catch((err) => console.log(err));
  }
  //this gets triggered by the input's onchange
  handleChanges = (e) => {
    this.setState({ query: e.target.value });
    this.filterUsers(e.target.value);
  };
  //query is the target value from input. this will filter all the cards and leave only the matching to input data
  filterUsers = (query) => {
    const results = this.state.followerInfo.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ followerInfo: results });
  };

  render() {
    console.log("loading", this.state);
    return (
      <div>
        <header>
          <Logos />
        </header>
        <div className="search">
          <form>
            <input
              id="name"
              onChange={this.handleChanges}
              value={this.state.query}
              placeholder="Search..."
              type="text"
              name="textfield"
            />
          </form>
        </div>
        <GitHubCard
          cardInfo={this.state.cardInfo}
          followers={this.state.followersInfo}
          followerInfo={this.state.followerInfo}
        />
      </div>
    );
  }
}

export default App;
