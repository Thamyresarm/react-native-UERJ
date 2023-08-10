import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';

const showAlert = () =>
  Alert.alert('Título do Alerta','Texto da Mensagem do Alerta',
    [
      {
        text: 'Cancelar',
        onPress: () => Alert.alert('Cancelar Pressionado'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'Este alerta foi descartado tocando fora da caixa de diálogo de alerta.',
        ),
    },
  );

const App = () => (
  <View style={styles.container}>
    <Button title="Mostrar Alerta" onPress={showAlert} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;