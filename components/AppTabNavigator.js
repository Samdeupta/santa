import * as React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import RequestScreen from '../screens/requestScreen';
import AppStackNavigator from './appStackNavigator'

export const AppTabNavigator= createBottomTabNavigator({
  Request:{
    screen: RequestScreen,
    navigationOptions:{tabBarLabel:"Request"}
  },
  Donate:{
    screen: AppStackNavigator,
    navigationOptions:{tabBarLabel:"Donate"}
  }
})