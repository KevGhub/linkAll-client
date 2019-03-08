import React from "react";

function Message(props) {
  return (
    <div className="message">
      <div className="message-username">{props.sender.name}</div>
      <div className="message-avatarURL">
        <img src={props.sender.avatarURL} alt="avatar pict" />
      </div>
      <div className="message-text">{props.text}</div>
    </div>
  );
}

export default Message;
