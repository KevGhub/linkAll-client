import React, { Component } from "react";
import Chatkit from "@pusher/chatkit-client";

import { getCountries } from "../api.js";

class CreateRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryAmount: 0,
      roomAmount: 0
    };
  }

  componentDidMount() {
    // CONNECTION FRONT & BACK is HERE :
    // get datat from our Express API (localhost:5555) (now in api.js)
    getCountries().then(response => {
      const countries = response.data;
      // console.log("our COUNTRIES :", response.data);
      // SAVE the JSON data from the API into the state
      this.setState({ countryAmount: countries.length });

      countries.forEach(oneCountry => {
        oneCountry.RoomsCategories.forEach(oneCat => {
          Chatkit.createRoom({
            creatorId: "Kevin",
            name: "my room",
            customData: { foo: 42 }
          })
            .then(() => {
              console.log("Room created successfully");
            })
            .catch(err => {
              console.log(err);
            });
        });
      });
    });
  }
  render() {
    return <h1>CreateRoom</h1>;
  }
}

export default CreateRooms;

/*
code original





*/
