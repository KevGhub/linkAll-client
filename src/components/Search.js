import React, { Component } from "react";

// import { Link } from "react-router-dom";

import { getCountries } from "../api.js";

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
    console.log("it works i guess?");
  }

  genericOnChange(event) {
    console.log(event.target.value, "here is the event");
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    // CONNECTION FRONT & BACK is HERE :
    // get datat from our Express API (localhost:5555) (now in api.js)
    getCountries().then(response => {
      //ALWAYS console.log () response.data to see what the API give you
      console.log("our countries", response.data);
      // SAVE the JSON data from the API into the state
      this.setState({ countryArray: response.data });
    });
  }
  render() {
    const { countryArray } = this.state;

    return (
      <section className="searchResult">
        <h2>Search</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.countrySearch}
            name="countrySearch"
            type="text"
            className="search-bar"
            placeholder="Search a Country or your friends"
          />
        </form>

        <ul>
          {countryArray.map(oneCounrty => {
            return (
              <li key={oneCounrty._id}>
                <h3>{oneCounrty.name}</h3>
                <p>{oneCounrty.capital}</p>
                <img src={oneCounrty.flag} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Search;
