import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { TabNavigator } from './TabNavigator'
import { InfoScreen } from '../screens/InfoScreen';

export const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  return (
    <Drawer.Navigator >
      <Drawer.Screen 
        name='Inicio'
        component={ TabNavigator }
        options={{ headerShown: false }}  
      />
      <Drawer.Screen 
        name='Información' 
        component={ InfoScreen }
      />
    </Drawer.Navigator>
  )
}