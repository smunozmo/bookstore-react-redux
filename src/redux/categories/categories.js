import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => (
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
        <div className="card-body cardBody p-5 fs-2 text-center">
          Under construction.
        </div>
      </div>
    </div>
  </div>
);

export default Categories;
