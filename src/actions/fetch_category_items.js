import axios from 'axios';
const ROOT_URL = 'http://swapi.co/api/';

export const FETCH_CATEGORY_ITEMS = 'FETCH_CATEGORY_ITEMS';

export function fetchCategoryItems(category) {

  const url_category = `${ROOT_URL}${category}/`;

  const request = axios.get(url_category);
  console.log('Request:', request);

  return {
    type: FETCH_CATEGORY_ITEMS,
    payload: request // request is a promise and redux-promise (as middleware)
    // and after the request is finished it dispatches a new action of the same type
    // but with a payload of the resolved promise
  };
}


// import axios from 'axios';
// const ROOT_URL = 'http://swapi.co/api/';
//
// export const FETCH_CATEGORY_ITEMS = 'FETCH_CATEGORY_ITEMS';
//
// export function fetchCategoryItems(category) {
//   let j = 1;
//   let f = 1;
//   const url_category = `${ROOT_URL}${category}/${j}/`;
//
//   if (category == 'planets') {
//     f = 61;
//   }
//   else if (category == 'people') {
//     f = 87;
//   }
//   else if (category == 'films') {
//     f = 7;
//   }
//   else if (category == 'vehicles') {
//     f = 39;
//   }
//   else if (category == 'starships') {
//     f = 37;
//   }
//   else if (category == 'species') {
//     f = 37;
//   }
//
//   const request = axios.get(url_category);
//   console.log('Request:', request);
//
//   for(j = 1; j <= f; j++) {
//
//     // const request = axios.get(url_category);
//
//     return {
//       type: FETCH_CATEGORY_ITEMS,
//       payload: request // request is a promise and redux-promise (as middleware)
//       // and after the request is finished it dispatches a new action of the same type
//       // but with a payload of the resolved promise
//     };
//   }
// }
