import React, { Component } from 'react';
import { View, Alert,Text, Image, StyleSheet } from 'react-native'

const apertou = ()=> {Alert.alert('Clicou no Texto')};

const TextExample = () => {
	return (
		<View style = {styles.container}>
			<Text style = {styles.text}>
				<Text style = {styles.capitalLetter}>
					exemplo de texts
					{'\n'}
					{'\n'}
				</Text>
				<Text  onPress={() => apertou()}>
					orem ipsum dolor sit amet, sed do eiusmod.
					{'\n'}
					{'\n'}
				</Text>
				<Text>
					Ut enim ad <Text style = {styles.wordBold}>minim </Text> veniam,
					quis aliquip ex ea commodo consequat.
					{'\n'}
					{'\n'}
				</Text>
				<Text style = {styles.italicText}>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
					{'\n'}
					{'\n'}
				</Text>
				<Text style = {styles.textShadow}>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</Text>
		</Text> 
 </View>
 )
}
export default TextExample
const styles = StyleSheet.create ({
 container: {
 alignItems: 'center',
 marginTop: 100,
 padding: 20
 }, 
 text: {
 color: '#41cdf4',
 },
 capitalLetter: {
 color: 'red',
 fontSize: 20
 },
 wordBold: {
 fontWeight: 'bold',
 color: 'black'
 },
 italicText: {
 color: '#37859b',
 fontStyle: 'italic'
 },
 textShadow: {
 textShadowColor: 'red',
 textShadowOffset: { width: 2, height: 2 },
 textShadowRadius : 5
 }
})