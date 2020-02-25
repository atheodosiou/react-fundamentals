import CONFIG from '../../Config';

function _initCoutries(context) {
    fetch(CONFIG.api).then(resp => resp.json()).then(data => {
        context.setState((state) => ({
            allCountries: data,
            visibleCountries: data.slice(0, state.countriesVisibleOnLoad)
        }));
    }).catch(error => {
        context.setState((state) => ({ countryListError: true }));
    });
}

function _loadMoreCountries(context) {
    console.log('LOAD MORE', context.state);
    context.setState((state) => ({
        // allCountries: state.allCountries,
        visibleCountries: [...state.allCountries]
    }));
}

export {
    _initCoutries,
    _loadMoreCountries
}