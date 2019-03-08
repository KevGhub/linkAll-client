import React, { Component } from "react";

import "./HomePage.css";
import Search from "./Search";

import CountryFavList from "./CountryFavList";
import { getCountries } from "../api.js";
import logoBig from "../images/logo-big.png"
import search from "../images/searchIcon.svg";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryArray: []
    };
  }

  componentDidMount() {
    getCountries().then(response => {
      console.log("Countries", response.data);
      this.setState({ countryArray: response.data });
    });
  }

  render() {
    return (
      <section className="HomePage container d-flex align-items-center justify-content-center">
        <div className="row w-100">
         
          <div className="col-12 m-auto text-center">
            <img src={logoBig} alt="logo" className="imgLogo mt-4 " />

            <h6 className="text-uppercase text-small letter-space">
              Welcome to Link'All ! Your favorite Chat country.
            </h6>

            <Search />
          </div>
        </div>
        {/*  end row */}
      </section>
    );
  }
}

export default HomePage;
