export function selectBook(book) {
  // selectBook is an actionCreator, it needs to return an aciotn
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
  console.log('A book has been selected:', book.title);
}
