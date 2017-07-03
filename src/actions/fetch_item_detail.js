import axios from 'axios';
const ROOT_URL = 'http://swapi.co/api/';

export const FETCH_ITEM_DETAIL = 'FETCH_ITEM_DETAIL';

export function fetchItemDetail(categoryItem) {

  const url_category_item = `${ROOT_URL}${category}/${categoryItem}/`;

  // const url_people = `${ROOT_URL}${people/}`;
  // const url_films = `${ROOT_URL}${films/}`;
  // const url_planets = `${ROOT_URL}${planets/}`;
  // const url_starships = `${ROOT_URL}${starships/}`;
  // const url_species = `${ROOT_URL}${species/}`;
  // const url_vehicles = `${ROOT_URL}${vehicles/}`;

  const request = axios.get(url_category_item);

  console.log('Request:', request);

  return {
    type: FETCH_ITEM_DETAIL,
    payload: request // request is a promise and redux-promise (as middleware)
    // and after the request is finished it dispatches a new action of the same type
    // but with a payload of the resolved promise
  };
}
