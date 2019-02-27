import React from "react";

class RoomList extends React.Component {
  render() {
    // Room sort by order appear
    const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id);
    return (
      <div className="rooms-list">
        <ul>
          <h3>Your rooms:</h3>
          {this.props.rooms.map(room => {
            // class "active" if you are in this current room :
            const active = this.props.roomId === room.id ? "active" : "";
            return (
              <li key={room.id} className={"room" + active}>
                <a onClick={() => this.props.subscribeToRoom(room.id)} href="#">
                  # {room.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RoomList;
