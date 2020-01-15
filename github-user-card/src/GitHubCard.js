import React from "react";

const GitHubCard = props => {
  console.log(props);
  return (
    <div className="card">
      <div className="card-info">
        <img src={props.cardInfo.avatar_url} />
        <h3 className="name">{props.cardInfo.name}</h3>
        <p className="username">{props.cardInfo.username}</p>
        <p>Location: {props.cardInfo.location}</p>
        <p>Profile: </p>
        <a href={props.cardInfo.html_url}>{props.cardInfo.html_url}</a>
        <p>Followers: {props.cardInfo.followers}</p>
        <p>Following: {props.cardInfo.following}</p>
        <p>Bio: {props.cardInfo.bio}</p>
      </div>
    </div>
  );
};
export default GitHubCard;
