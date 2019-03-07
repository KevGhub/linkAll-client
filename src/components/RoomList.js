import React from "react";
import { patchFavorite, getFavorite } from "../api";

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [] 
    };
  }

  componentDidMount () {
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
        <ul>
          <h3>Your rooms:</h3>
          {this.props.rooms.map(room => {
            // class "active" if you are in this current room :
            const active = this.props.roomId === room.id ? "active" : "";
            return (
              <li key={room.id} className={"room " + active}>
                <a onClick={() => this.props.subscribeToRoom(room.id)} href="#">
                  # {room.name}
                </a>
                {favorites.includes(room.id) ? (
                  <button className="bookmarked">Star</button>
                ) : (
                  <button onClick={() => this.favoriteClick(room)}>Star</button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RoomList;

/* 

________________________

ORIGINAL CODE : 
chatkit.addUsersToRoom({
  roomId: room.id,
  userIds: ['alice', 'bob']
})
  .then(() => console.log('added'))
  .catch(err => console.error(err))


________________________





  <a
                    onClick={() =>
                      this.props.chatkit
                        .addUsersToRoom({
                          roomId: room.id,
                          userIds:currentUser
                        })
                        .then(() => console.log("added"))
                        .catch(err => console.error(err))
                    }
                    href="#"
                  >
                    # {room.name}
                  </a>
                  
                  */
