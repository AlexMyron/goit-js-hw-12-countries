import refs from './refs';
// import fetchCountries from './fetchCountries';
import CountryQuery from './fetchCountries';

const countryQuery = new CountryQuery(refs);

const debounce = require('lodash.debounce');
let URL = null;

refs.input.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  const val = e.target.value;
  URL = `https://restcountries.eu/rest/v2/name/${val}`;
  countryQuery.clearMurkup();

  if (val === '') {
    return;
  }
  countryQuery.fetchCountries(URL);
}
