import {useNetInfo} from "@react-native-community/netinfo";
import {View, Text, Button, StatusBar,PermissionsAndroid, StyleSheet, Alert} from "react-native";
import React, {useState} from 'react';

const TesteNetInfo = () => {
  const netInfo = useNetInfo();
  const [autorizado,setAutorizado] = useState(false);
  
  const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permissão para dados da Rede',
        message:'Acesso aos dados da Rede',       
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {	
		setAutorizado(true);
    } else {  		
	
	    setAutorizado(false);	  
    }
  } catch (err) {
        setAutorizado(false);
  }
};


const MinhaRede = () => {
    return (
	
	<View style={styles.container}>
        <Text>Tipo: {netInfo.type}</Text>
		<Text>{netInfo.isConnected ? "Conectado"  : "Não"}</Text>
		<Text>{netInfo.isWifiEnabled ? "WiFi-ON" : "WiFi-OFF"}</Text>
		<Text>{netInfo.isInternetReachable ? "Internet_ON" : "Internet_OFF"}</Text>	  
		<Text>{(netInfo.isWifiEnabled) ? (<Text>Força do Sinal: {netInfo.details.strength}</Text>) : "" }</Text>
		<Text>{(netInfo.isWifiEnabled) ? (<Text>ssid: {netInfo.details.ssid}</Text>) : "" }</Text>
		<Text>{(netInfo.isWifiEnabled) ? (<Text>ipAddress: {netInfo.details.ipAddress}</Text>) : "" }</Text>
		<Text>{(netInfo.isWifiEnabled) ? (<Text>Link Speed: {netInfo.details.linkSpeed}</Text>) : "" }</Text>
		<Text>{(netInfo.isWifiEnabled) ? (<Text>Operadora: {netInfo.details.carrier}</Text>) : "" }</Text>
      </View>
	  
    );
  };

  
  return (  
    <View style={styles.container}>
		<StatusBar hidden={false} />  
		<Button title="Pedir Permissão" onPress={requestCameraPermission} />
		{autorizado ? (<MinhaRede/>) :  (<Text></Text>)}   	 
    </View>
  );
};

const styles = StyleSheet.create({  
  container: { 
	flex:1,	
    alignItems: 'center', 
  },   
});  

export default TesteNetInfo;