import React, { Component } from "react";
import Chatkit from "@pusher/chatkit";

// import Search from "./components/Search.js";

import { tokenUrl, instanceLocator } from "../config";

class OnlineUser extends Component {
  constructor(props) {
    super(props);
    this.state = { onlineUsers: [] };
  }

  componentDidMount() {
    console.log("props", this.props);
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      // userId: this.props.currentUser._id,
      userId: "Kevin",
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        // CREATE A COMPONENT FOR ONLINE CURRENT USER
        // console.log(this.currentUser.rooms[1].userIds);
        this.setState({ onlineUsers: this.currentUser.rooms[1].userIds });
      })
      .catch(err => console.log("error on connecting: ", err));
  }
  render() {
    const { onlineUsers } = this.state;

    // console.log(onlineUsers);

    return (
      <div>
        {onlineUsers.map(oneName => {
          return <li key={oneName}> {oneName} </li>;
        })}
      </div>
    );
  }
}

export default OnlineUser;
