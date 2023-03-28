// Dependancies
import React from "react";
import { createRoot } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

// Components
import App from './App';

// Module CSS
import './index.scss';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { themeReducer } from './Store/Reducers/themeReducers';

const store = createStore( themeReducer )

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Provider store={ store }>
              <App />
          </Provider>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
