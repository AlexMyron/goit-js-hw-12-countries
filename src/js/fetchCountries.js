import listTempl from '../templates/list-templ.hbs';
import countryTempl from '../templates/country-templ.hbs';
import refs from './refs';
import alertMsg from './pnotify';

export default function fetchCountries(url) {
  return fetch(url)
    .then(resolve => resolve.json())
    .then(result => {
      console.log(result);
      if (result.length > 10) {
        alertMsg();
      } else if (result.length >= 2 && result.length <= 10) {
        markupList(result, listTempl);
      } else {
        markupList(result, countryTempl);
      }
    });
}

function markupList(result, template) {
  refs.list.insertAdjacentHTML('beforeend', template(result));
}
