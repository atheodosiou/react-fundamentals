import React from 'react';
import './Countries.scss';
import countryCard from '../../views/countryCard/countryCard';
import CONFIG from '../../Config';

class Countries extends React.Component {
    constructor() {
        super();
        this.state = {
            allCountries: [],
            countryListError: false
        };

        this._initCoutries(this);
    }

    _initCoutries(context) {
        fetch(CONFIG.api).then(resp => resp.json()).then(data => {
            context.setState((state) => ({ allCountries: data }));
        }).catch(error => {
            context.setState((state) => ({ countryListError: true }));
        });
    }

    render() {
        console.log(this.state.allCountries);
        return (
            <section className="countries">
                <div className="country-list">
                    {this.state.allCountries.map((country, index) => {
                        return (<React.Fragment key={index}>
                            {countryCard({
                                imgSrc: country.flag,
                                name: country.name,
                                population: country.population,
                                buttonLabel: "View",
                                callback: null
                            })}
                        </React.Fragment>)
                    })};
                </div>
            </section>
        );

    }
}

export default Countries;