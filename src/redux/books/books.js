const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOK = 'GET_BOOK';
export const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JRvgmQWxBSuTgawpguvn/books';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBook = (payload) => ({
  type: GET_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          item_id: action.payload.id,
          title: action.payload.title,
          category: action.payload.genre,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return state;
    case REMOVE_BOOK: {
      fetch(`${url}${action.payload.id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
