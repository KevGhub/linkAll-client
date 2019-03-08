import React from "react";
import Sound from "react-sound";

class SendMessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      selectedGif: ""

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      message: event.target.value,
      // selectedGif: event.target.req.body

    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: "",
      
      
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="send-message-form">
        {/* <input
          disabled={this.props.disabled} // Empeche d'écrire avant de rejoindre une Room
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Send gif hit ENTER"
          type="file"
        > */}
          {this.props.selectedGif && <img src={this.props.selectedGif} />}
        
        <input
          disabled={this.props.disabled} // Empeche d'écrire avant de rejoindre une Room
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type your message and hit ENTER"
          type="text"
        />
      </form>
      //   <Sound
      //   url="cool_sound.mp3"
      //   playStatus={Sound.status.PLAYING}
      //   playFromPosition={300 /* in milliseconds */}
      //   onLoading={this.handleSongLoading}
      //   onPlaying={this.handleSongPlaying}
      //   onFinishedPlaying={this.handleSongFinishedPlaying}
      // />
    );
  }
}

export default SendMessageForm;
