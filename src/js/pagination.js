import articlesTpl from '../templates/arcticles-tpl.hbs';
import NewsApiService from './news-service';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('click', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;

  // if (newsApiService.query === '') {
  //   return alert('Введи что-то нормальное');
  // }

  newsApiService.resetPage();

  newsApiService.fetchArticles().then(articles => {
    clearArticlesContainer();
    appendArticlesMarkup(articles);
  });
}

function onLoadMore() {
  newsApiService.fetchArticles().then(appendArticlesMarkup);
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
