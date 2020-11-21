import React from 'react';
import { Provider } from 'react-redux';
import ApplicationNavigationContainer from 'Routes/ApplicationNavigationContainer';
import {
  ContactContext,
  ContactContextAccessor,
} from 'Runtime/context/contactContext';
import { configureStore } from 'Store/store';

const store = configureStore();

export default function ApplicationIndex() {
  return (
    <Provider store={store}>
      <ContactContextAccessor.Provider value={ContactContext}>
        <ApplicationNavigationContainer />
      </ContactContextAccessor.Provider>
    </Provider>
  );
}
