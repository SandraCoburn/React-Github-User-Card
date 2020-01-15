import React from "react";
import axios from "axios";

const GitHubCard = props => {
  const { cardInfo, followers } = props;
  console.log(props);
  return (
    <>
      <div className="card">
        <div className="card-info">
          <img src={cardInfo.avatar_url} />
          <h2 className="name">{cardInfo.name}</h2>
          <p className="username">{cardInfo.username}</p>
          <p>Location: {cardInfo.location}</p>
          <p>Profile: </p>
          <a href={cardInfo.html_url}>{cardInfo.html_url}</a>
          <p>Followers: {cardInfo.followers}</p>
          <p>Following: {cardInfo.following}</p>
          <p>Bio: {cardInfo.bio}</p>
        </div>
      </div>
      <div>
        <h1>{cardInfo.name}'s Followers:</h1>
      </div>
      <div className="followers-box">
        {followers.map((follower, index) => {
          return (
            <div className="followers" key={index}>
              <div className="card-info">
                <img src={follower.avatar_url} alt="user avatar" />
                <p>{follower.login}</p>

                <p>
                  Profile: <a href={follower.html_url}>{follower.html_url}</a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default GitHubCard;
