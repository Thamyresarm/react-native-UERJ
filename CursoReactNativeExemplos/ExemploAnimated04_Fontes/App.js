import React, { useState, useEffect } from 'react';
import { Animated, View, Button, StatusBar,StyleSheet } from 'react-native';

export default function App() {

const [redSquareAnim] = useState(new Animated.Value(0))
const [blueSquareAnim] = useState(new Animated.Value(0))
const [blackSquareAnim] = useState(new Animated.Value(0))

const onPressDecay = () => {
  Animated.decay(blueSquareAnim, { velocity: 0.41, deceleration: 0.999, useNativeDriver: true}).start()
}
const onPressSpring = () => {
  Animated.spring(blackSquareAnim, {toValue: 400, speed: 10, bounciness: 20, useNativeDriver: true}).start()
}
const onPressTiming = () => {
  Animated.timing(redSquareAnim, {toValue: 400, duration: 1000, useNativeDriver: true}).start()
}
  
return (

	<View style={styles.container}>
	<StatusBar hidden={false} /> 
		<View style={{flexDirection: 'row'}}>
			<Button    			
				onPress={() => onPressTiming()}
				title = "Timing"
				color = "red"		
			/>
			<Button    			
				onPress={() => onPressDecay()}
				title = "Decay"
				color = "blue"		
			/>
			<Button    			
				onPress={() => onPressSpring()}
				title = "Spring"
				color = "black"		
			/>
			
		</View>
		<View style={{flexDirection: 'row',padding: 20,}}>
			<Animated.View style={{
				backgroundColor: 'red',
				height: 50,
				width: 50,
				marginBottom: 20,
				transform: [{translateY: redSquareAnim}]
			}}/>
			<Animated.View style={{
				backgroundColor: 'blue',
				height: 50,
				width: 50,
				marginBottom: 20,
				transform: [{translateY: blueSquareAnim}]
			}}/>
			<Animated.View style={{
				backgroundColor: 'black',
				height: 50,
				width: 50,
				marginBottom: 20,
				transform: [{translateY: blackSquareAnim}]
			}}/>
		
			</View>
		</View>
		
   )  
}
const styles = StyleSheet.create({
	container: {
    flex:1,		
    alignItems: 'center',
	padding: 10,
	margin: 20,
  },     
});