import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ExemploPegaCEP from './AppCEP';
import Carros from './AppCarros';

const image = { uri: 'https://www.imagenspng.com.br/wp-content/uploads/2023/07/barbie-logo-png-05.png' };

function HomeScreen() {
  return (
      <ImageBackground source={image} resizeMode="cover" style={{width: '100%', height: '70%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
      </ImageBackground>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ExemploPegaCEP />
    </View>
  );
}


function CarrosScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Carros />
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Principal') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Buscar CEP') {
              iconName = focused ? 'search-circle-sharp' : 'search-circle-sharp';
            } else if (route.name === 'Carros') {
              iconName = focused ? 'car-sport-sharp' : 'car-sport-sharp';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Principal" component={HomeScreen} />
        <Tab.Screen name="Buscar CEP" component={SettingsScreen} />
        <Tab.Screen name="Carros" component={CarrosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
