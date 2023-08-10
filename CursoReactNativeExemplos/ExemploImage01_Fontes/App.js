import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>      
      <Image
        style={styles.logo}
        source={{
			uri:"https://randomuser.me/api/portraits/women/44.jpg",  
        }}
      />
	  <Image
        style={styles.logo}
        source={{
			uri:"https://randomuser.me/api/portraits/women/44.jpg",  
        }}
      />
	  
    </View>
  );
};

export default DisplayAnImage;