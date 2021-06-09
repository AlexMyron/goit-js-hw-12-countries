const body = document.querySelector('body');

const input = document.createElement('input');
input.classList.add('input');
body.append(input);

const list = document.createElement('ul');
list.classList.add('query-list');
body.append(list);

export default {
  input,
  list,
};
