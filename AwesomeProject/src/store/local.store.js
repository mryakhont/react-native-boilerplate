import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

export const getItem = async (key) => {
  return await AsyncStorage.getItem(key);
};

const AuthenticationTokenKey = 'authentication_token';
export const setAuthenticationToken = (token) => {
  setItem(AuthenticationTokenKey, token);
};

export const getAuthenticationToken = async () => {
  try {
    const value = await AsyncStorage.getItem('AuthenticationTokenKey');
    return value;
  } catch (error) {
    return '';
  }
};
