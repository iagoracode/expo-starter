import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container } from './indexStyled';
import { Text } from 'react-native';

export default function App() {
  return (
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  );
}
