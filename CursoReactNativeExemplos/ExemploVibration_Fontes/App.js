import React from 'react';
import {Button,Platform,Text,Vibration,View,SafeAreaView,StyleSheet,} from 'react-native';

const Separator = () => {
  return <View style={Platform.OS === 'android' ? styles.separator : null} />;
};

const App = () => {
  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  const PATTERN_DESC =
    Platform.OS === 'android' ? 'espera 1s, vibrate 2s, espera 3s' : 'espera 1s, vibrate, espera 2s, vibrate, espera 3s';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.header, styles.paragraph]}>Vibration API</Text>
      <View>
        <Button title="Vibra Uma Vez" onPress={() => Vibration.vibrate()} />
      </View>
      <Separator />
      <View>
        <Button 
            title="Vibra por 10 segundos"
            onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
        />
      </View>
	  <Separator />
      <Text style={styles.paragraph}>Padrão: {PATTERN_DESC}</Text>
      <Button
        title="Vibra pelo Padrão"
        onPress={() => Vibration.vibrate(PATTERN)}
      />
      <Separator />
      <Button
        title="Vibra pelo Padrão até Cancelar"
        onPress={() => Vibration.vibrate(PATTERN, true)}
      />
      <Separator />
      <Button
        title="Pára Vibração Padrão"
        onPress={() => Vibration.cancel()}
        color="#FF0000"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 44,
    padding: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;