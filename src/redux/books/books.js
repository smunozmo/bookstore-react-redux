import React from 'react';
import { Link } from 'react-router-dom';

const Books = () => (
  <div className="container align-middle py-5">
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
          <div className="card">
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p>Action</p>
                    <p>The Hunger Games</p>
                    <p>Suzanne Collins</p>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          Comments
                        </div>
                        <div className="col">
                          Remove
                        </div>
                        <div className="col">
                          Edit
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    64% Completed
                  </div>
                  <div className="col">
                    <p>Current chapter</p>
                    <p>Chapter 17</p>
                    <button type="button" className="btn btn-primary">UPDATE PROGRESS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Books;
