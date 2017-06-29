import axios from 'axios';
const ROOT_URL = 'http://swapi.co/api/';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export function fetchCategories() {
  const request = axios.get(ROOT_URL);

  console.log('Request:', request);

  return {
    type: FETCH_CATEGORIES,
    payload: request // request is a promise and redux-promise (as middleware)
    // and after the request is finished it dispatches a new action of the same type
    // but with a payload of the resolved promise
  };
}

console.log('Running okay')
//
// export const FETCH_CATEGORY_ITEMS = 'FETCH_CATEGORY_ITEMS';
//
// export function fetchCategoryItems(category) {
//
//   const url_people = `${ROOT_URL}${people/}`;
//   const url_films = `${ROOT_URL}${films/}`;
//   const url_planets = `${ROOT_URL}${planets/}`;
//   const url_starships = `${ROOT_URL}${starships/}`;
//   const url_species = `${ROOT_URL}${species/}`;
//   const url_vehicles = `${ROOT_URL}${vehicles/}`;
//
//   const request = axios.get(url);  // THis must become a conditional
//
//   return {
//     type: FETCH_CATEGORY_ITEMS,
//     payload: request // request is a promise and redux-promise (as middleware)
//     // and after the request is finished it dispatches a new action of the same type
//     // but with a payload of the resolved promise
//   };
// }
