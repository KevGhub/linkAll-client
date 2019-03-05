import React, { Component } from "react";
import Chatkit from "@pusher/chatkit";

import { getCountries } from "../api.js";

class CreateRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creatorId: "",
      name: "",
      customData: { flag: "" }
    };
  }

  componentDidMount() {
    // CONNECTION FRONT & BACK is HERE :
    // get datat from our Express API (localhost:5555) (now in api.js)
    getCountries().then(response => {
      // console.log("our COUNTRIES :", response.data);
      // SAVE the JSON data from the API into the state
      this.setState({ countryArray: response.data });
    });
  }
  render() {
    return <h1>CreateRoom</h1>;
  }
}

export default CreateRooms;

/*
code original


chatkit.createRoom({
  creatorId: 'userId',
  name: 'my room',
  customData: { foo: 42 },
})
  .then(() => {
    console.log('Room created successfully');
  }).catch((err) => {
    console.log(err);
  });



*/
