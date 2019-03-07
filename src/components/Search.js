import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
// import chatkit from "@pusher/chatkit";
import icon1 from "../images/icon-1.svg";
import icon2 from "../images/icon-2.svg";
import icon3 from "../images/icon-3.svg";
import icon4 from "../images/icon-4.svg";
import { getCountries } from "../api.js";

import "./Search.css";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryArray: [],
      countrySearch: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit ok ?");
  }

  genericOnChange(event) {
    console.log(event.target.value, "TEST generic onchange event");
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
    const { countryArray, countrySearch } = this.state;
    // console.log(countryArray, countrySearch);

    const lowerSearch = countrySearch.toLowerCase();
    const filteredArray = countryArray.filter(oneCountry => {
      const lowerName = oneCountry.name.toLowerCase();
      return lowerName.includes(lowerSearch);
    });

    return (
      <section className="searchResult">
        
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.oneCountry}
            name="countrySearch"
            type="text"
            className="search-bar text-center w-100"
            placeholder="Search for a country"
            autoComplete="off"
          />
        </form>

        {countrySearch === "" ?
         null
          :
          (
          <div className="countryList container">
          <ul className="row d-flex justify-content-center">
            {filteredArray.map(oneCountry => {
              return (
                <li className="oneCountry col-lg-4 col-md-6 col-sm-12 w-100" key={oneCountry._id}>
                  <div className="li-content">
                  <img src={oneCountry.flag} className="countryFlag" />
                  <h4>{oneCountry.name}</h4>
                  {/* <p>{oneCountry.capital}</p> */}
<div className="iconList d-flex justify-content-center">
                  {oneCountry.RoomsCategories.map(oneRoomCategory => {
                    return (

                      <Link
                        key={oneRoomCategory._id}
                        to={`/linkall-messenger/${oneCountry.name}/${
                          oneRoomCategory.roomName
                        }`}
                        >
                          {oneRoomCategory.roomName === "Travel in" ?
                            <img src={icon1} alt="" className="icons"/>
                            :
                            oneRoomCategory.roomName === "Fooding" ?
                              <img src={icon4} alt="" className="icons"/>
                              :
                              oneRoomCategory.roomName === "Culture & language" ?
                                <img src={icon3} alt="" className="icons" />
                                :
                                <img src={icon2} alt="" className="icons"/>
                          }
                        </Link>
                    );
                  })}
                    </div>
                  </div>
                </li>
              );
            })}
            </ul>
            </div>
        )}
      </section>
    );
  }
}

export default Search;

// chatkit.addUsersToRoom({
//   roomId: room.id,
//   userIds: ['alice', 'bob']
// })
//   .then(() => console.log('added'))
//   .catch(err => console.error(err))
