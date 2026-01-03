import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import RevealScreen from './src/screens/RevealScreen';
import GameEndScreen from './src/screens/GameEndScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#0a1929' },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reveal" component={RevealScreen} />
        <Stack.Screen name="GameEnd" component={GameEndScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
