export const loadItems = (urlApi) => () =>
  fetch(urlApi, {
    mode: 'no-cors',
  }).then((res) => res.json());