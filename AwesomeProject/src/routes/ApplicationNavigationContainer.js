import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthenticatedRoutes } from 'Routes/settings/Authenticated.Routes';
import { PublicRoutes } from 'Routes/settings/Public.Routes';
import { useContactContext } from 'Runtime/context/ApplicationContext';
const Stack = createStackNavigator();

function ApplicationNavigationContainer() {
  const [initialRouteName, setInitRouteName] = React.useState('Login');

  const context = useContactContext();

  React.useEffect(() => {
    setInitRouteName(context.authenticated === true ? 'Home' : 'Login');
  }, [context.authenticated]);

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        {context.authenticated !== true
          ? false
          : generateRoutes(AuthenticatedRoutes)}
        {generateRoutes(PublicRoutes)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigationContainer;
