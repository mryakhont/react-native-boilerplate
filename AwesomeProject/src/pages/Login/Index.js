import React, { useEffect, useState } from 'react';
import {
  Button,
  Linking,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { useContactContext } from 'Runtime/context/ApplicationContext';
import { authenticateUser } from 'Store/login/actions';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = useContactContext();
  useEffect(() => {
    if (context.authenticated === true) {
      props.navigation.navigate('Home');
    }
  }, [context.authenticated, props.navigation]);

  return (
    <View>
      <TextInput
        value={email}
        placeholder="email"
        onChangeText={(s) => setEmail(s)}
      />
      <TextInput
        value={password}
        placeholder="password"
        onChangeText={(s) => setPassword(s)}
      />
      <Button
        title="Login"
        onPress={() => {
          props.authenticateUserAction({
            email,
            password,
          });
        }}
      />
      <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
        <Text>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.login.authenticated,
  };
};

const mapDispatchToProps = {
  authenticateUserAction: authenticateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
