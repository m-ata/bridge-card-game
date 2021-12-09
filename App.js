import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './src/Navigation/TabNavigation';
export default function App() {
  return (
    <NavigationContainer >
      <TabNavigation />
      </NavigationContainer>
  );
}