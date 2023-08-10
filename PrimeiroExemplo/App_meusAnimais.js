import React from 'react';
import { StyleSheet} from 'react-native';
import MeuAnimais from './components/MeuAnimais/MeuAnimais';


export default function App() {
  return (
    <MeuAnimais />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontWeight: "bold",
    color:'#2196f3',
    fontSize:18
    }
});
