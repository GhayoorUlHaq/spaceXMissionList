import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SpaceMissions from '../screens/spaceMission';
import ScreenB from '../screens/screenB';
import ScreenC from '../screens/screenC';
const Drawer = createDrawerNavigator();

const AppDrawer = () => (
  <Drawer.Navigator initialRouteName="ScreenA">
    <Drawer.Screen name="ScreenA" component={ScreenB} />
    <Drawer.Screen name="SpaceMissions" component={SpaceMissions} />
    <Drawer.Screen name="ScreenB" component={ScreenC} />
  </Drawer.Navigator>
);

export default AppDrawer;
