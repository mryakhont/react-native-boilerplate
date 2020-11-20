import React from 'react';
import { Provider } from 'react-redux';
import ApplicationNavigationContainer from 'Routes/ApplicationNavigationContainer';
import { configureStore } from 'Store/store';

const store = configureStore();

export default function ApplicationIndex() {
  return (
    <Provider store={store}>
      <ApplicationNavigationContainer />
    </Provider>
  );
}
