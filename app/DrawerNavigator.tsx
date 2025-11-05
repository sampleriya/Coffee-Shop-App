import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ebdddaff',
        },
        drawerActiveTintColor: '#542f24ff',
        drawerInactiveTintColor: '#442b23ff',
        headerStyle: {
          backgroundColor: '#ead3ccff',
        },
        headerTintColor: '#100101ff',
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: ' Coffee Shop' }}
      />
      <Drawer.Screen name="Buy Coffee" component={SettingsScreen} />
      <Drawer.Screen name="My Orders" component={SettingsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Logout" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}