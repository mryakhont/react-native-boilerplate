import React from 'react';
import {
  Button,
  Linking,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

export default function Login() {
  return (
    <View>
      <TextInput value="" placeholder="email" />
      <TextInput value="" placeholder="password" />
      <Button title="Login" onPress={() => {}} />
      <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
        <Text>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
}
