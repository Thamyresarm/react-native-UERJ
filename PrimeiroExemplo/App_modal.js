import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Button, View} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal foi fechado!');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>React Native ON!</Text>
            <Button        
				onPress={() => setModalVisible(!modalVisible)} 
				title = "Esconder Modal"
				color = "red"
            />
          </View>
        </View>
      </Modal>
      <Button        
		onPress={() => setModalVisible(!modalVisible)} 
		title = "Mostrar Modal"
		color = "green"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },    
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;