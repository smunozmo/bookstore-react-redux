import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeBook } from '../redux/books/books';

const Books = () => {
  const myBooks = useSelector((state) => state.bookRedux);
  const dispatch = useDispatch();
  // const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JRvgmQWxBSuTgawpguvn/books';

  // const fetchBooks = async () => {
  //   const booksFecth = await fetch(url);
  //   const booksData = await booksFecth.json();
  //   console.log('booksData: ', booksData);
  //   return booksData;
  // };

  // const booksObject = fetchBooks();
  // const booksAPI = Array.from(booksObject);

  // console.log('booksAPI: ', booksAPI);

  const removeBookBtn = (e) => {
    dispatch(removeBook(e.target));
  };

  const AddBookCard = () => (
    <div>
      {myBooks.map((book) => {
        const randomNum = Math.floor(Math.random() * 100);
        const barstyle = {
          width: `${randomNum}%`,
        };

        return (
          <div className="card" key={book.id}>
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p className="fs-6 text-secondary">{book.genre}</p>
                    <p className="fs-5 fw-bold">{book.title}</p>
                    <p className="fs-5 text-primary">{book.author}</p>
                    <div className="container p-0">
                      <div className="row">
                        <div className="col">
                          Comments
                        </div>
                        <div className="col">
                          <button type="button" onClick={removeBookBtn} id={book.id} className="buttonRemove">Remove</button>
                        </div>
                        <div className="col">
                          Edit
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    {randomNum}
                    % Completed
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={barstyle} />
                    </div>
                  </div>
                  <div className="col">
                    <p>Current chapter</p>
                    <p>
                      Chapter&nbsp;

                      {Math.floor(Math.random() * 100)}
                    </p>
                    <button type="button" className="btn btn-primary">UPDATE PROGRESS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="container align-middle p-5">
      <div className="container my-5 align-middle" id="formContainer">
        <div className="card">
          <div className="card-header">
            <div className="container">
              <div className="row">
                <div className="col">
                  Bookstore CMS
                </div>
                <div className="col">
                  <Link className="links" to="/">BOOKS</Link>
                </div>
                <div className="col">
                  <Link className="links" to="/categories">CATEGORIES</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <AddBookCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
