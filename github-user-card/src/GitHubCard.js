import React from "react";

const GitHubCard = props => {
  const { cardInfo, followerInfo } = props;
  console.log(props);
  return (
    <>
      <div className="card">
        <div className="card-info">
          <img src={cardInfo.avatar_url} alt="avatar" />
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
        {followerInfo.map((follower, index) => {
          return (
            <div className="followers" key={index}>
              <div className="card-info">
                <img src={follower.avatar_url} alt="user avatar" />
                <p className="name">{follower.name} </p>
                <p>{follower.login}</p>
                <p>Location: {follower.location}</p>
                <p>Followers: {follower.followers}</p>
                <p>Following: {follower.following}</p>
                <p>Bio: {follower.bio}</p>
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
