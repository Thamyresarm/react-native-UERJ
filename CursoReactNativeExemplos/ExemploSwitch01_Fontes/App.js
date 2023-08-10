import React, {useState} from 'react';
import {View, Switch, StyleSheet,Text} from 'react-native';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
	<Text style={styles.textStyle}>Switch Exemplo</Text>  
	<Text style={styles.textStyle}>{isEnabled ? 'on' :'off'}</Text>  
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}        
		thumbColor={isEnabled ? '#00ff00' : '#ff0000'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{  
        margin: 24,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
        color: '#344953'  
    },  
});

export default App;