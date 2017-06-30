import { FETCH_CATEGORIES } from '../actions/index';

export default function(state = null, action) { // OR state = []
  console.log('Action received', action);

  switch (action.type) {
  case FETCH_CATEGORIES:
    return [ action.payload.data.keys ]; // OR with , ...state]
  }
  return state;
}

console.log('Prima')

// VOLGENS MIJ MOET DIT NOG OP EEN MANIER VERWERKT WORDEN
// .then(function(response) {
//     const categories = Object.keys(response.data)
//     that.setState({categories: categories })
