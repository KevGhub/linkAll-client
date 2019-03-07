import React from "react";

function Message(props) {
  return (
    <div className="message">
      <div className="message-username">{props.sender.name}</div>
      <div className="message-text">{props.text}</div>
      <div className="message-avatarURL"> {props.sender.avatarURL} </div>
    </div>
  );
}

export default Message;
