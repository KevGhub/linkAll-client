import React from 'react';
import './CountryFavList.css';
import CountryCard from './CountryCard';


const listOfCountryPerRow = (countries, row, itemsPerRow, match) =>
    countries
        .slice((row - 1) * itemsPerRow, row * itemsPerRow)
        .map(country => <CountryCard country={country} key={country.id} match={match} />);

const listOfRows = (countries, itemsPerRow, match) => {
    const numberOfCountry = countries.length;
    const rows = Math.ceil(numberOfCountry / itemsPerRow);
    return Array(rows)
        .fill()
        .map((val, rowIndex) => (
            <div className="columns">
                {listOfCountryPerRow(countries, rowIndex + 1, itemsPerRow, match)}
            </div>
        ));
};

const CountriesList = ({ countries, itemsPerRow = 2, match }) => (
    <div className="cards">
        <h3 className="is-size-3 has-text-centered">Favorites Channels</h3>
        {listOfRows(countries, itemsPerRow, match)}
    </div>
);
export default CountryFavList;