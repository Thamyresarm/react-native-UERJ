import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>#Caixa 1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>#Caixa 2</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>#Caixa 3</Text>
      </View>
    </View>
  );
}