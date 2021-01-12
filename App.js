import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/homeScreen';
import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';
import {AppDrawerNavigator} from './components/appDrawerNavigator';
import {AppTabNavigator} from './components/AppTabNavigator';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';

import SideBar from './components/sideBarMenu'

export default class App extends React.Component {
  render(){
    return (
    <SideBar/>
  );
  }
}

const AppNavigator = createSwitchNavigator({
  Home:{screen: HomeScreen },
  Drawer:{screen: AppDrawerNavigator},
  BottomTab:{screen: AppTabNavigator}
});

const AppContainer = createAppContainer(AppNavigator);
