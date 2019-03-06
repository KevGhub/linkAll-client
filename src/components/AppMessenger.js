import React from "react";
import Chatkit from "@pusher/chatkit";
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";
import RoomList from "./RoomList";
import Search from "./Search.js";
import OnlineUser from "./onlineUser.js";
// import SearchBar from "./SearchBar";
// import GifList from "./GifList";
// import axios from "axios";

import { tokenUrl, instanceLocator } from "../config.js";
import { getCountryDetails } from "../api";
class AppMessenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: {},
      roomId: null,
      messages: [],
      joinableRooms: [],
      joinedRooms: [],
      userInfo: {}
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.subscribeToRoom = this.subscribeToRoom.bind(this);
    this.getRooms = this.getRooms.bind(this);
    // this.handleTermChange = this.handleTermChange.bind(this);
  }

  componentDidMount() {
    // const { userInfo } = userInfo.name;
    // console.log(userInfo.name);
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: this.props.currentUser._id,
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;

        this.getRooms();
        this.updateCountryState();
      })
      .catch(err => console.log("error on connecting: ", err));
  }

  componentDidUpdate(oldProps) {
    const oldParams = oldProps.match.params;
    const params = this.props.match.params;

    if (
      oldParams.countryName !== params.countryName ||
      oldParams.roomName !== params.roomName
    ) {
      this.updateCountryState();
    }
  }

  updateCountryState() {
    const { params } = this.props.match;

    getCountryDetails(params.countryName).then(response => {
      console.log("Country Details", response.data);
      this.setState({ country: response.data });

      const room = response.data.RoomsCategories.find(oneCat => {
        return oneCat.roomName === params.roomName;
      });
      this.subscribeToRoom(room.chatkitId);
    });
  }

  getRooms() {
    // this.currentUser
    // .getJoinableRooms()
    // .then(joinableRooms => {
    this.setState({
      // joinableRooms,
      joinedRooms: this.currentUser.rooms
    });
    // })
    // .catch(err => console.log("error on joinableRooms: ", err));
  }

  subscribeToRoom(roomId) {
    this.setState({ messages: [] });
    this.currentUser
      .subscribeToRoom({
        roomId: roomId,
        // messageLimit: 100,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
          // CREATE A NEW COMPONENT FOR  : user typing indicator
          // onUserStartedTyping: user => {
          //   /** render out the users */
        }
      })

      .then(room => {
        console.log("subscribed", room, this.currentUser.joinedRooms);
        this.setState({
          roomId: room.id
        });
        this.getRooms();
      })
      .catch(err => console.log("error on subscribing to room", err));
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    });
  }

  // GIF RELATED----------------------------
  //   handleTermChange(term) {
  //     axios
  //       .get(
  //         `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=3fUr3O3KAnYiu437hFaSeaM1Aip5o5Mi
  // `
  //       )
  //       .then(response => {
  //         this.setState({ term: response.data });
  //       })
  //       .catch(err => console.log("error on giphy", err));
  //   }

  render() {
    return (
      <div className="AppMessenger">
        <Search />
        {/* <SearchUser user={this.props.userInfo} /> // for user search bar from searchUser.js*/}
        <RoomList
          subscribeToRoom={this.subscribeToRoom}
          rooms={[...this.state.joinedRooms]}
          roomId={this.state.roomId}
        />

        <OnlineUser />
        <MessageList
          roomId={this.state.roomId}
          messages={this.state.messages}
        />
        <SendMessageForm
          disabled={!this.state.roomId}
          sendMessage={this.sendMessage}
        />
        {/* <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} /> */}
        {/* // opposite value of disabled on sendmessageForm (// Empeche d'écrire avant de rejoindre une Room) */}
      </div>
    );
  }
}

export default AppMessenger;
