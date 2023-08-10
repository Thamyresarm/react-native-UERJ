import { Button } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Alert, StyleSheet, Modal } from 'react-native';


const Carros = () => {
  const lista = [
    {
      marca: "Fiat",
    },
    {
      marca: "GM",
    },
    {
      marca: "VW",
    },
    {
      marca: "Ford",
    }
  ]

  let marcaSelecionada = '';

  const [isLoading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modelos, setModelos] = useState([]);

  const ItemView = ({ item }) => {
    return (
      <Text style={styles.itemStyle}
        onPress={() => { marcaSelecionada = item.marca, getMarca() }}
      >
        {item.marca}
      </Text>
    );
  }

  const getMarca = async () => {
    try {
      setLoading(true);
      console.log(marcaSelecionada)
      const response = await fetch('http://152.92.181.90:8080/CursoJavaScript/EnviarMenuJson', {
        method: 'POST',
        headers: {
          //	Accept: 'application/json','Content-Type': 'application/json;charset=UTF-8',			
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: JSON.stringify({ marca: marcaSelecionada })
      });

      const json = await response.json();
      //console.log(json.Carros)
      if (json.Carros != 'undefined') {
        setModalVisible(true)
        setModelos(json.Carros)
        // console.log(modelos)
      } else {
        setModalVisible(false)
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
            <FlatList
              data={modelos}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <Text style={styles.textStyle}>
                  {item.id} - {item.marca} {item.modelo} {item.ano}
                </Text>
              )}
            />
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
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={lista}
          keyExtractor={({ marca }) => marca}
          renderItem={ItemView}
        />
      )}
      {modalVisible ? <MeuModal /> : ''}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    margin: 10,
    paddingTop: 40,
    width: '100%',
    backgroundColor: 'white',
  },
  itemStyle: {
    backgroundColor: '#ffc700',
    padding: 10,
    textAlign: 'center',
    marginVertical: 8,
    color: 'black',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
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
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
});
export default Carros;