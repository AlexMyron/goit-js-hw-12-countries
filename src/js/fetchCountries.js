import listTempl from '../templates/list-templ.hbs';
import countryTempl from '../templates/country-templ.hbs';

export default class CountryQuery {
  constructor({ list }, alertMsg) {
    this.list = list;
    this.alert = alertMsg;
  }

  // fetchCountries(url) {
  //   return fetch(url)
  //     .then(resolve => resolve.json())
  //     .then(result => {
  //       console.log(result);
  //       if (result.length > 10) {
  //         this.alert();
  //       } else if (result.length >= 2 && result.length <= 10) {
  //         this.markupList(result, listTempl);
  //       } else {
  //         this.markupList(result, countryTempl);
  //       }
  //     })
  //     .catch(err =>
  //       console.log('An error has occured. Please check your query content.'),
  //     );
  // }

  async fetchCountries(url) {
    const resolve = await fetch(url);
    const result = await resolve.json();
    return result;
  }

  async resolveFetch(url) {
    const result = await this.fetchCountries(url);

    try {
      if (result.length > 10) {
        this.alert();
      } else if (result.length >= 2 && result.length <= 10) {
        this.markupList(result, listTempl);
      } else {
        this.markupList(result, countryTempl);
      }
    } catch (error) {
      console.log('Error', error);
    }

    // try {
    //   if (result.length > 10) {
    //     this.alert();
    //   } else if (result.length >= 2 && result.length <= 10) {
    //     this.markupList(result, listTempl);
    //   } else {
    //     this.markupList(result, countryTempl);
    //   }

    // } catch (error) {
    //   console.log(`An error has occured. Please check your query content: ${error}`),
    // }
  }

  markupList(result, template) {
    this.list.insertAdjacentHTML('beforeend', template(result));
  }

  clearMurkup() {
    this.list.innerHTML = '';
  }
}
