import React from "react";
import { patchFavorite, getFavorite } from "../api";

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
  }

  componentDidMount() {
    this.updateFavorites();
  }

  favoriteClick(room) {
    console.log("ROOM FAVORITE", room.id);

    patchFavorite(room.id).then(() => {
      this.updateFavorites();
    });
  }

  updateFavorites() {
    getFavorite().then(response => {
      console.log("Favorite Array", response.data);
      this.setState({ favorites: response.data });
    });
  }

  render() {
    const { favorites } = this.state;
    // Room sort by order appear
    const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id);
    return (
      <div className="rooms-list">
        <div className="rooms-ul text-center">
          <h1>
            <b>Your rooms</b>
          </h1>
          <ul>
            {this.props.rooms.map(room => {
              // class "active" if you are in this current room :
              const active = this.props.roomId === room.id ? "active" : "";
              return (
                <li key={room.id} className={"room" + active}>
                  <a
                    onClick={() => this.props.subscribeToRoom(room.id)}
                    href="#!"
                  >
                    # {room.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default RoomList;
