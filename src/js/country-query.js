import refs from './refs';
import fetchCountries from './fetchCountries';

const debounce = require('lodash.debounce');
let URL = null;

refs.input.addEventListener('input', debounce(onInput, 500));

function onInput(e) {
  const val = e.target.value;
  URL = `https://restcountries.eu/rest/v2/name/${val}`;
  clearMurkup();

  if (val === '') {
    return;
  }
  fetchCountries(URL);
}

function clearMurkup() {
  refs.list.innerHTML = '';
}
