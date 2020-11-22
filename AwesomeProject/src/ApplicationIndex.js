import React from 'react';
import { Provider } from 'react-redux';
import ApplicationNavigationContainer from 'Routes/ApplicationNavigationContainer';
import ApplicationContext from 'Runtime/context/ApplicationContext';
import { configureStore } from 'Store/store';
import { initFetchRequestInterceptor } from 'Runtime/request/applicationInterceptors';

const store = configureStore();
initFetchRequestInterceptor();

export default function ApplicationIndex() {
  return (
    <Provider store={store}>
      <ApplicationContext>
        <ApplicationNavigationContainer />
      </ApplicationContext>
    </Provider>
  );
}
