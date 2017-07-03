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
