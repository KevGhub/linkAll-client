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
      //ALWAYS console.log () response.data to see what the API give you
      console.log("our COUNTRIES :", response.data);
      // SAVE the JSON data from the API into the state
      this.setState({ countryArray: response.data });
    });
  }

  render() {
    const { countryArray, countrySearch } = this.state;

    const lowerSearch = countrySearch.toLowerCase();
    const filteredArray = countryArray.filter(oneCountry => {
      const lowerName = oneCountry.name.toLowerCase();
      return lowerName.includes(lowerSearch);
    });

    return (
      <section className="searchResult">
        <h2>Search</h2>

        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.oneCountry}
            name="countrySearch"
            type="text"
            className="search-bar"
            placeholder="Search a Country or your friends"
          />
        </form>

        <ul>
          {filteredArray.map(oneCountry => {
            return (
              <li key={oneCountry._id}>
                <h3>{oneCountry.name}</h3>
                <p>{oneCountry.capital}</p>
                <img src={oneCountry.flag} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Search;
