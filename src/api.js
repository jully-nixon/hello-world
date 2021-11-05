export const messageOfTheDay = (urlApi) => () =>
  fetch(urlApi).then((res) => res.json());