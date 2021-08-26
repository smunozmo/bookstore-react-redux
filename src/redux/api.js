const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JRvgmQWxBSuTgawpguvn/books';

const fetchBooks = async () => {
  const booksFecth = await fetch(url);
  const booksData = await booksFecth.json();
  console.log('books data: ', booksData);

  return booksData;
};

export default fetchBooks;
