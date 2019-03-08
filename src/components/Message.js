import React from "react";

function Message(props) {
  return (
    <div className="message">
      <div className="message-username">{props.sender.name}</div>
      <div className="message-avatarURL">
        <img
          src={props.sender.avatarURL}
          alt="avatar pict"
          className="imgPic"
        />
      </div>

      <div className="textDiv">
        {props.text === "" ? null : (
          <div className="message-text">{props.text}</div>
        )}
      </div>
      <div className="gifDiv">
        {props.attachment && props.attachment.type === "image" && (
          <img src={props.attachment.link} className="gif" />
        )}
      </div>
    </div>
  );
}

export default Message;
