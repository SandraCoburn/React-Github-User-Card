import React from "react";
import lambdaLogo from "./images/lambdalogo.png";
import gitHubLogo from "./images/githublogo.png";
const Logos = () => (
  <div className="followers-box">
    <img src={lambdaLogo} alt="logo" />
    <h1>My GitHub App</h1>
    <img src={gitHubLogo} alt="logo" />
  </div>
);
export default Logos;
