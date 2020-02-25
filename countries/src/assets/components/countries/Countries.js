import React from 'react';
import './Countries.scss';
import countryCard from '../../views/countryCard/countryCard';

import {_initCoutries,_loadMoreCountries} from './CountriesUtils';

class Countries extends React.Component {
    loadMoreCountries = ()=>{_loadMoreCountries(this)}

    constructor() {
        super();
        this.state = {
            allCountries: [],
            countryListError: false,
            visibleCountries:[],
            countriesVisibleOnLoad:6
        };

      _initCoutries(this);
    }


    render() {
        console.log(this.state.allCountries);
        return (
            <section className="countries">
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
                {this.state.allCountries.length> this.state.visibleCountries.length &&(
                    <button onClick={this.loadMoreCountries}>Load More</button>
                )}
            </section>
        );

    }
}

export default Countries;