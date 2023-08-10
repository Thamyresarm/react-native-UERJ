import React, { Component } from 'react'
import {Alert} from 'react-native'
import {WebView} from 'react-native-webview'

const App = () => {
 return (
      <WebView
        source={{
          uri: 'https://github.com/facebook/react-native',
        }}
        style={{marginTop: 30}}
		onLoadEnd = {() => Alert.alert('Carregado!!!')}
		onNavigationStateChange = {() => Alert.alert('Mudou algo!!!')}
		
      />
    )
  };
export default App;