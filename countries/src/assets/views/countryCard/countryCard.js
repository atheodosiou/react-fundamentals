import React from 'react';
import './countryCard.scss';

//View
function countryCard(props) {
    return (
        <div className="country-card">
        <img className="flag" src={props.imgSrc} alt="country-card"></img>
        <h4 className="name">{props.name}</h4>
        <p className="pupulation">{props.population}</p>
        <button onClick={props.callback}>{props.buttonLabel}</button>
    </div>
    );
};

export default countryCard;