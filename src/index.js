import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // We'll create this next
import { Provider } from 'react-redux';  // If using Redux (from your code)
import store from './store';  // Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
