import React, { Component } from 'react';
import { Alert, Button, View, StyleSheet } from 'react-native';

export default class App extends Component {
  
  openAlert=()=>{
    alert('Alerta com 1 botão');
  }
  
  openTwoButtonAlert=()=>{
    Alert.alert('Alô você!','Dois botões',
      [
        {text: 'Sim', onPress: () => Alert.alert('Botão Sim Clicado')},
        {text: 'Não', onPress: () => Alert.alert('Botão Não Clicado'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
  }
  
  openThreeButtonAlert=()=>{
    Alert.alert(
      'Alô você!!', 'Três botões',
      [
        {text: 'Mais Tarde', onPress: () => Alert.alert('Botão Mais Tarde Clicado')},
        {text: 'Sim', onPress: () => Alert.alert('Botão Sim Clicado')},
        {text: 'Não', onPress: () => Alert.alert('Botão Não Clicado')},
      ],
      { 
        cancelable: false 
      }
    );
  }
  render() {
    return (
      <View style={styles.mainWrapper}>
        <Button title='1 Botão' onPress={this.openAlert}/>
        <Button title='2 Botões' onPress={this.openTwoButtonAlert}/>
        <Button title='3 Botões' onPress={this.openThreeButtonAlert}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  }
});