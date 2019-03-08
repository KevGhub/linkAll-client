import React, { Component } from "react";

class OnlineUser extends Component {
  render() {
    const { roomUsers } = this.props;

    return (
      <div>
        {roomUsers.map(oneName => {
          return <div key={oneName}> {oneName} </div>;
        })}
      </div>
    );
  }
}

export default OnlineUser;
