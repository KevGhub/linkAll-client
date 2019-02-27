import React from "react";

class SendMessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="send-message-form">
        <input
          disabled={this.props.disabled} // Empeche d'écrire avant de rejoindre une Room
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type your message and hit ENTER"
          type="text"
        />
      </form>
    );
  }
}

export default SendMessageForm;
