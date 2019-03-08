import React, { Component } from "react";

class OnlineUser extends Component {
  render() {
    const { roomUsers } = this.props;

    return (
      <div className="userOnline">
        <h4>Online user(s)</h4>
        {roomUsers.map(oneName => {
          return <li key={oneName}> {oneName} </li>;
        })}
      </div>
    );
  }
}

export default OnlineUser;
