import React from 'react';
import { StyleSheet, View } from 'react-native';
import Contador from './components/Contador';

export default function App() {
  return (
    <View style={styles.container}>
      <Contador />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
