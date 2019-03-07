import React, { Component } from "react";
import "./CountryFavList.css";
import { Link } from "react-router-dom";
// import CountryCard from './CountryCard';

// const countriesArray = this.props.countryArray;
// console.log("lolo", countriesArray);

// const listOfCountryPerRow = (countries, row, itemsPerRow, match) => {

// countries
//         .slice((row - 1) * itemsPerRow, row * itemsPerRow)
//         .map(country => <CountryCard country={country} key={country.id} match={match} />);

// }
// const listOfRows = (countries, itemsPerRow, match) => {
//     const numberOfCountry = countries.length;

//     const rows = Math.ceil(numberOfCountry / itemsPerRow);
//     return Array(rows)
//         .fill()
//         .map((val, rowIndex) => (
//             <div className="columns">
//                 {listOfCountryPerRow(countries, rowIndex + 1, itemsPerRow, match)}
//             </div>
//         ));
// };

class CountryFavList extends Component {
  state = {};
  render() {
    const { countryArray } = this.props;
    console.log(countryArray);
    return (
      <ul>
        {countryArray.map(oneCountry => {
          return (
            <li>
              <h3>{oneCountry.name}</h3>
              {/* <img src={oneCountry.flag} /> */}

              {oneCountry.RoomsCategories.map(oneRoomCategory => {
                return (
                  <div>
                    <Link
                      to={`/linkall-messenger/${oneCountry.name}/${
                        oneRoomCategory.roomName
                      }`}
                    >
                      <h4>{oneRoomCategory.roomName}</h4>
                    </Link>
                    <button>UNbookMaRk </button>
                  </div>
                );
              })}
            </li>
          );
        })}
      </ul>
    );
  }
}
export default CountryFavList;
