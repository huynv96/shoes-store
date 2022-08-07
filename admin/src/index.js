import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './components/grid/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals'

import Layout from './components/layout/Layout'

const store = createStore(
  rootReducer
)

document.title = 'ADMIN'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();