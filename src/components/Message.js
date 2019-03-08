import React from "react";

function Message(props) {
  return (
    <div className="message">
      <div className="message-username">{props.sender.name}</div>
      <div className="message-avatarURL">
        <img src={props.sender.avatarURL} alt="avatar pict" />
      </div>
      <div className="message-text">{props.text}</div>
      {(props.attachment && props.attachment.type === "image") && <img src={props.attachment.link} />}
    </div>
  );
}

export default Message;
