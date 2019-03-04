import React, { Component } from "react";

import { getUsers } from "../api.js";

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersArray: [],
      userSearch: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit works ?");
  }

  genericOnChange(event) {
    console.log(event.target.value, "TEST generic onchange event");
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    // CONNECTION FRONT & BACK is HERE :
    getUsers().then(response => {
      console.log("our users :", response.data);

      this.setState({ usersArray: response.data });
    });
  }

  render() {
    const { usersArray, userSearch } = this.state;
    console.log(usersArray, userSearch);

    const lowerSearch = userSearch.toLowerCase();
    const filteredArray = usersArray.filter(oneUser => {
      const lowerName = oneUser.name.toLowerCase();
      return lowerName.includes(lowerSearch);
    });

    return (
      <section className="searchResult">
        <h2>Search Users</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.oneUser}
            name="userSearch"
            type="text"
            className="search-bar"
            placeholder="Search a Country or a friend"
          />
        </form>
        {userSearch === "" ? null : (
          <ul>
            {filteredArray.map(oneUser => {
              return (
                <li key={oneUser._id}>
                  <h3>{oneUser.pseudo}</h3>
                  <img src={oneUser.profileImg} />
                </li>
              );
            })}
          </ul>
        )}
      </section>
    );
  }
}

export default SearchUser;
