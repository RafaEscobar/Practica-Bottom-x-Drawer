import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/Ionicons';

import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { InicioScreen } from '../screens/InicioScreen';
import { DosScreen } from '../screens/DosScreen';

const Tab = createBottomTabNavigator();

export const TabNavigator = ({ navigation }:any) => {
  const navigatio = useNavigation();
  return (
    <Tab.Navigator 
    screenOptions={ ({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let nameIcon='';
        switch(route.name){
          case 'InicioScreen':
            nameIcon= 'layers';
          break;
          case 'DosScreen':
            nameIcon='paper-plane';
          break;
        }
        return <Icon name={nameIcon} color={ color } size={ size } />
      }
    })}
    
    >
      <Tab.Screen 
        name='InicioScreen' 
        component={ InicioScreen } 
        options={{
          title: 'Inicio',
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={()=>navigatio.dispatch(DrawerActions.openDrawer)}>
                <Icon name='reorder-three' color='dark' size={ 30 } style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            );
          },
        }} 
      /> 
      <Tab.Screen 
        name='DosScreen' 
        component={ DosScreen } 
        options={{
          title: 'Más...',
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={()=>navigatio.dispatch(DrawerActions.openDrawer)}>
                <Icon name='reorder-three' color='dark' size={ 30 } style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            );
          },
        }} 
      /> 

    </Tab.Navigator>
  )
}