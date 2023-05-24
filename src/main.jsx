import React from "react";
import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import createSagaMiddleware from "redux-saga";
import {Provider} from 'react-redux';
import * as rootReducer from './Store/rootReducer.js'
import rootSaga from "./Components/Gallery/Store/Gallery.saga.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    ...rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializeableCheck: false }).concat(
      sagaMiddleware
    ),
});


sagaMiddleware.run(rootSaga);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
