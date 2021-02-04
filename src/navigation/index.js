import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppDrawer from './appDrawer';

export default function AppContainer () {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}
