import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, Alert, View} from 'react-native';

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + ' x Pressionado';
  } else if (timesPressed > 0) {
    textLog = 'Componente Pressable';
  }
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {backgroundColor: pressed ? 'yellow' : 'pink'},
          styles.wrapperCustom,
        ]}
		
		onPressOut={() => Alert.alert('Soltou!')}>
        {({pressed}) => (		
          <Text style={styles.text}>{pressed ? 'Pressionado!' : 'Pressione Me'}</Text>	 		
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text>{textLog}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
	alignItems: 'center', 
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8, 
    padding: 6, 
    height: 50, 
    width: '70%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 5, 
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});

export default App;