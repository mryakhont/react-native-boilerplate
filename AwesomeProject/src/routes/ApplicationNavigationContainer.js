import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthenticatedRoutes } from 'Routes/settings/Authenticated.Routes';
import { PublicRoutes } from 'Routes/settings/Public.Routes';
import { navigationRef } from 'Routes/ExternalNavigation';
const Stack = createStackNavigator();

const ApplicationNavigationContainer = () => {
  const authenticatedRoutes = AuthenticatedRoutes;
  const publicRoutes = PublicRoutes;

  const generateRoutes = (routes) =>
    routes.map((r) => {
      return (
        <Stack.Screen
          name={r.name}
          component={r.component}
          options={r.options}
          key={`${r.name}_screen`}
        />
      );
    });

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={
          publicRoutes.find((r) => r.options.initialRoute === true).name
        }>
        {generateRoutes(authenticatedRoutes)}
        {generateRoutes(publicRoutes)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigationContainer;
