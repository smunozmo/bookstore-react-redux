import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/booksdisplay';
import Categories from './redux/categories/categories';
import ButtonAdd from './components/bookadd';
import store from './redux/configureStore';
import Loop from './components/loop';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Books />
            <ButtonAdd />
            <Loop />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
