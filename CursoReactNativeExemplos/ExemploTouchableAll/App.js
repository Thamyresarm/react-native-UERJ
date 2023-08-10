import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from
    'react-native';
const _onPressButton = () => {
    Alert.alert('Botão foi tocado!!!!');
}
const _onLongPressButton = () => {
    Alert.alert('Botão tocado por longo tempo!!!');
}
export default function App() {
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={_onPressButton} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableHighlight</Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity onPress={_onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableOpacity</Text>
                </View>
            </TouchableOpacity>
            <TouchableWithoutFeedback
                onPress={_onPressButton}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableHighlight onPress={_onPressButton} onLongPress={_onLongPressButton} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Touchable with Long Press</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#dddddd',
      padding: 10,	
    },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
    countText: {
      color: '#FF00FF',
    },
  });
  
  