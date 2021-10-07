import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Peliculas from '../screens/Peliculas';
import Series from '../screens/Series';
import Proximamente from '../screens/Proximamente';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Constants } from 'react-native';

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarOptions: {
          style: {
            backgroundColor: '#0A193C',
          },
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'peliculas') {
            iconName = focused ? 'ios-film' : 'ios-film-outline';
          } else if (route.name === 'series') {
            iconName = focused ? 'ios-desktop' : 'ios-desktop-outline';
          } else if (route.name === 'proximamente') {
            iconName = focused ? 'ios-timer' : 'ios-timer-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: '#0A193C',
        tabBarInactiveBackgroundColor: '#0A193C',
      })}>
      <Tab.Screen
        style={styles.cuerpo}
        name="peliculas"
        component={Peliculas}
        options={{ title: 'Peliculas' }}
      />
      <Tab.Screen
        name="series"
        component={Series}
        options={{ title: 'Series' }}
      />
      <Tab.Screen
        name="proximamente"
        component={Proximamente}
        options={{ title: 'Proximamente' }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  cuerpo: {
    backgroundColor:'#0A193C'
  }
});
