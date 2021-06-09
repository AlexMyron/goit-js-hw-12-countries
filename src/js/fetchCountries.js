import listTempl from '../templates/list-templ.hbs';
import countryTempl from '../templates/country-templ.hbs';
import refs from './refs';
import alertMsg from './pnotify';

export default class CountryQuery {
  constructor({ list }) {
    this.list = list;
  }

  fetchCountries(url) {
    return fetch(url)
      .then(resolve => resolve.json())
      .then(result => {
        console.log(result);
        if (result.length > 10) {
          alertMsg();
        } else if (result.length >= 2 && result.length <= 10) {
          this.markupList(result, listTempl);
        } else {
          this.markupList(result, countryTempl);
        }
      });
  }

  markupList(result, template) {
    this.list.insertAdjacentHTML('beforeend', template(result));
  }

  clearMurkup() {
    this.list.innerHTML = '';
  }
}

// export default function fetchCountries(url) {
//   return fetch(url)
//     .then(resolve => resolve.json())
//     .then(result => {
//       console.log(result);
//       if (result.length > 10) {
//         alertMsg();
//       } else if (result.length >= 2 && result.length <= 10) {
//         markupList(result, listTempl);
//       } else {
//         markupList(result, countryTempl);
//       }
//     });
// }

// function markupList(result, template) {
//   refs.list.insertAdjacentHTML('beforeend', template(result));
// }
