import React, { useState } from 'react';
import {
  Button,
  Linking,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { authenticateUser } from 'Store/login/actions';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            navigation: props.navigation,
          });
        }}
      />
      <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
        <Text>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapDispatchToProps = {
  authenticateUserAction: authenticateUser,
};

export default connect(null, mapDispatchToProps)(Login);
