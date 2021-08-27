import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeBook, successBook } from '../redux/books/books';
import ButtonAdd from './bookadd';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchBooks = async () => {
      const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JRvgmQWxBSuTgawpguvn/books';
      const booksFecth = await fetch(url);
      const booksData = await booksFecth.json();
      return dispatch(successBook(booksData));
    };
    fetchBooks();
  }, []);

  const myBooks = useSelector((state) => state.bookRedux);

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
          <div className="card my-3 mx-5" key={book.id}>
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p className="text-secondary bookGenre">{book.genre}</p>
                    <p className="fw-bold bookTitle">{book.title}</p>
                    <p className="bookAuthor">{book.author}</p>
                    <div className="container p-0">
                      <div className="row actionsLinks justify-content-start">
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
                    <p className="fs-4">
                      {randomNum}
                      %
                    </p>
                    <p className="completed">Completed</p>
                    <div className="progress progressBar">
                      <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" aria-label="bar" style={barstyle} />
                    </div>
                  </div>
                  <div className="col">
                    <p className="bookGenre text-secondary currentChapter">CURRENT CHAPTER</p>
                    <p className="chapter">
                      Chapter&nbsp;
                      {Math.floor(Math.random() * 100)}
                    </p>
                    <button type="button" className="btn btn-info btn-sm buttonUpdate">UPDATE PROGRESS</button>
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
    <div className="container align-middle p-5 my-5">
      <div className="container my-5 align-middle" id="formContainer">
        <div className="card shadow-lg rounded">
          <div className="card-header cardHeader">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-3 mainTitle">
                  Bookstore CMS
                </div>
                <div className="col-2 text-center">
                  <Link className="links" to="/">BOOKS</Link>
                </div>
                <div className="col-2">
                  <Link className="links" to="/categories">CATEGORIES</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body cardBody">
            <AddBookCard />
          </div>
          <ButtonAdd />
        </div>
      </div>
    </div>
  );
};

export default Books;
