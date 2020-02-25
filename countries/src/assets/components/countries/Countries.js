import React from 'react';
import './Countries.scss';
import countryCard from '../../views/countryCard/countryCard';
import CData from './Countries.json';
import { _initCoutries, _loadMoreCountries } from './CountriesUtils';
import countryHeader from '../../views/countryHeader/countryHeader';

class Countries extends React.Component {
    loadMoreCountries = () => { _loadMoreCountries(this) }

    constructor() {
        super();
        this.state = {
            allCountries: [],
            countryListError: false,
            visibleCountries: [],
            countriesVisibleOnLoad: 15,
            buttons:[
                {
                    text:"Sort A-Z",
                    callback:console.log
                },
                {
                    text:"Sort by Population",
                    callback:console.log
                }
            ]
        };

        _initCoutries(this);
    }


    render() {
        console.log(this.state.allCountries);
        return (
            <section className="countries">
                <h1>{CData.title}</h1>
                {/* Country Header */}

                {countryHeader({
                   buttons:this.state.buttons
                })}

                <div className="country-list">
                    {this.state.visibleCountries.map((country, index) => {
                        return (<React.Fragment key={index}>
                            {countryCard({
                                imgSrc: country.flag,
                                name: country.name,
                                population: country.population,
                                buttonLabel: "View",
                                callback: null
                            })}
                        </React.Fragment>)
                    })}
                </div>
                {this.state.allCountries.length > this.state.visibleCountries.length && (
                    <button onClick={this.loadMoreCountries}>{CData.loadMoreBtnText}</button>
                )}
            </section>
        );

    }
}

export default Countries;