import Login from 'Pages/Login/Index';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'Store/store';

const store = configureStore();

export default function ApplicationIndex() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}
