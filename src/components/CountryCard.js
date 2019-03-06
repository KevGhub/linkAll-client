import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.css'


const CountryCard = ({ country, match }) => <Link to={`${match.url}/${country.id}`} className="column card">
    <img src={country.avatar} alt="" />
    <p className="countrys-card__name">{country.name}</p>
    <p className="countrys-card__countryname">@{country.countryname}</p>
    <div className="countrys-card__divider"></div>
    <div className="countrys-card__stats">
        <div>
            <p>{country.followers}</p>
            <span>Followers</span>
        </div>
        <div>
            <p>{country.following}</p>
            <span>Following</span>
        </div>
        <div>
            <p>{country.repos}</p>
            <span>Repositories</span>
        </div>
    </div>
</Link>;
export default CountryCard;