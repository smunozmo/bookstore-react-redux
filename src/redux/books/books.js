const { uniqueNamesGenerator, starWars } = require('unique-names-generator');

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const SUCCESS_BOOK = 'SUCCESS_BOOK';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JRvgmQWxBSuTgawpguvn/books/';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const successBook = (payload) => ({
  type: SUCCESS_BOOK,
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
      }).then(() => {
        window.location.reload();
      });
      return state;
    case REMOVE_BOOK: {
      fetch(`${url}${action.payload.id}`, {
        cash: 'reload',
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(() => {
        window.location.reload();
      });
      return state;
    }
    case SUCCESS_BOOK: {
      return Object.keys(action.payload).map((key) => ({
        id: key,
        title: action.payload[key][0].title,
        author: uniqueNamesGenerator({ dictionaries: [starWars] }),
        genre: action.payload[key][0].category,
      }));
    }
    default:
      return state;
  }
};

export default reducer;
