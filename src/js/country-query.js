import refs from './refs';
import CountryQuery from './fetchCountries';
import alertMsg from './pnotify';

const countryQuery = new CountryQuery(refs, alertMsg);

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
  // countryQuery.fetchCountries(URL);
  countryQuery.resolveFetch(URL);
}
