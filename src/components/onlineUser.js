import React, { Component } from "react";

class OnlineUser extends Component {
  render() {
    const { roomUsers } = this.props;

    return (
      <div>
        {roomUsers.map(oneName => {
          return <li key={oneName}> {oneName} </li>;
        })}
      </div>
    );
  }
}

export default OnlineUser;
