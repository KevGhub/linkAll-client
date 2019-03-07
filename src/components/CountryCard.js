import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.css'





const CountryCard = ({ country, match }) => <Link to={`${match.url}/${country.id}`} className="column card">
    <img src={country.flag} alt="country flag" />
    <p className="countrys-card__name">{country.name}</p>
    {country.RoomsCategories.map(oneRoomCategory => {
        return (
            <div>
                <b className="countrys-card__countryname">{oneRoomCategory.roomName}</b>
                <div className="countrys-card__divider"></div>
                <div className="countrys-card__stats">
                    <div><p>{oneRoomCategory.roomName}</p></div>
                    <div><p>{oneRoomCategory.roomName}</p></div>
                    <div><p>{oneRoomCategory.roomName}</p></div>
                </div>
            </div>
        );
    })} 
</Link>;


export default CountryCard;