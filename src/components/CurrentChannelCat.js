import React, { Component } from "react";
import RoomList from "./RoomList.js";

class CurrentChannelCat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id);

    return (
      <div className="current-channel-cat">
        <h2>Here cat info: </h2>
        {this.props.rooms.map(room => {
          // class "active" if you are in this current room :
          const active = this.props.roomId === room.id ? "active" : "";
          return (
            <div key={room.id} className={"room " + active}>
              <p>
                {() => this.props.subscribeToRoom(room.id)} #{room.name}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CurrentChannelCat;

// {
//   /* <h3>Here it's{currentRoom} </h3>
//         <h4>let's try : {categories} </h4>  */
// }
