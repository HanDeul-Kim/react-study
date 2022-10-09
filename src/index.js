import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store.js'

import {PersistGate} from "redux-persist/integration/react"
import {persistStore} from "redux-persist"
const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
