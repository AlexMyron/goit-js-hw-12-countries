const API_KEY = '3889e629501242eb93a727f8479fafad';
const BASE_URL = 'https://newsapi.org/v2/';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  // fetchArticles() {
  //   const url = `${BASE_URL}everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

  //   return fetch(url, options)
  //     .then(rerponce => rerponce.json())
  //     .then(({ articles }) => {
  //       this.incrementPage();
  //       return articles;
  //     });
  // }

  async fetchArticles() {
    const url = `${BASE_URL}everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

    const resolve = await fetch(url, options);
    const articles = await response.json();
    return articles;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
