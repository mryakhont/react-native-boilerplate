import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

function Home() {
  const [] = useState('');
  const [] = useState('');

  return (
    <View>
      <Text>You logged in!</Text>
    </View>
  );
}

export default connect(null, null)(Home);
