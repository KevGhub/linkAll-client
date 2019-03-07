import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

class MessageList extends React.Component {
  // ######## prevent automatically scrolling when you read a Up's message #######
  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollToBottom =
      node.scrollTop + node.clientHeight + 100 >= node.scrollHeight;
  }
  // ######## scrolling automatically when you receive a new message #######

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }
  // scrollTop : how far we scroll down
  // scrollHeight : how long the entire element scrollable is

  render() {
    if (!this.props.roomId) {
      return (
        <div className="message-list">
          <div className="join-room">&larr; Start to LinkAll!</div>
        </div>
      );
    }
    return (
      <div className="message-list">
        {this.props.messages.map((message, index) => {
          return (
            <Message
              key={message.id}
              username={message.senderId}
              // username={message.name}
              text={message.text}
            />
          );
        })}
      </div>
    );
  }
}

export default MessageList;
