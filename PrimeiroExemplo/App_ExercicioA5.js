import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, Modal, Button } from 'react-native';

const DATA = [
  {
    id: "1",
    title: "Faraday",
  },
  {
    id: "2",
    title: "Isaac Newton",
  },
  {
    id: "3",
    title: "LaPlace",
  },
  {
    id: "4",
    title: "Volta",
  },
  {
    id: "5",
    title: "Marie Curie",
  },
  {
    id: "6",
    title: "Edison",
  },
  {
    id: "7",
    title: "Benjamin Franklin",
  },
  {
    id: "8",
    title: "Einstein",
  },
  {
    id: "9",
    title: "Lattes",
  },
  {
    id: "10",
    title: "Da Vinci",
  },
  {
    id: "11",
    title: "Galileu",
  },
  {
    id: "12",
    title: "Copérnico",
  },
  {
    id: "13",
    title: "Tesla",
  },
  {
    id: "14",
    title: "Sabin",
  },
  {
    id: "15",
    title: "Darwin",
  },
  {
    id: "16",
    title: "Fourier",
  },
  {
    id: "17",
    title: "Karnaugh",
  },
  {
    id: "18",
    title: "Stephen Hawking",
  },
  {
    id: "19",
    title: "Arquimedes",
  },
  {
    id: "20",
    title: "Antoine Lavoisier",
  },
];

let id = 0;
let title = '';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemStyle}
        onPress={() =>{setModalVisible(true),id = item.id, title = item.title}}
      >
        {item.id}{' - '}{item.title.toUpperCase()}
      </Text>
    );
  };

  const chegouAoFim = () => {
    alert("Acabouuuu!");
  }

  const MeuModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //  Alert.alert('Modal foi fechado!');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{id}{' - '}{title.toUpperCase()}</Text>
            <Button
              onPress={() => setModalVisible(false)}
              title="Fechar"
              color="red"
            />
          </View>
        </View>
      </Modal>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={ItemView}
          onEndReached={chegouAoFim}
          onEndReachedThreshold={0.1}
        />
        {modalVisible ? <MeuModal /> : ''}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingTop: 40,
    backgroundColor: 'white',
  },
  itemStyle: {
    backgroundColor: '#ffc700',
    padding: 10,
    marginVertical: 8,
    color: 'black',
  },
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
