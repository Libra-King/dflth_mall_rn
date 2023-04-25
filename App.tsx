/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackRouter from './StackRouter';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <StackRouter></StackRouter>
    </NavigationContainer>
  );
}

export default App;
