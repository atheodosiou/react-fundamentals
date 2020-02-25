import React from 'react';
import './countryHeader.scss';

function countryHeader(props) {
    return (
        <div className="country-header-wrapper">
            {props.buttons.map((button, index) => {
                return (
                    <button key={index} className="button" onClick={button.callback}>{button.text}</button>
                )
            })}
        </div>
    );
}

export default countryHeader;