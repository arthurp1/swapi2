import axios from 'axios';
const ROOT_URL = 'http://swapi.co/api/';

export const FETCH_CATEGORY_ITEMS = 'FETCH_CATEGORY_ITEMS';

export function fetchCategoryItems(category) {

  const url_category = `${ROOT_URL}${category}/`;

  // const url_people = `${ROOT_URL}${people/}`;
  // const url_films = `${ROOT_URL}${films/}`;
  // const url_planets = `${ROOT_URL}${planets/}`;
  // const url_starships = `${ROOT_URL}${starships/}`;
  // const url_species = `${ROOT_URL}${species/}`;
  // const url_vehicles = `${ROOT_URL}${vehicles/}`;

  const request = axios.get(url_category);

  console.log('Request:', request);

  return {
    type: FETCH_CATEGORY_ITEMS,
    payload: request // request is a promise and redux-promise (as middleware)
    // and after the request is finished it dispatches a new action of the same type
    // but with a payload of the resolved promise
  };
}
