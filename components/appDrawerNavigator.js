import * as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import DonateScreen from '../screens/donateScreen';
import SettingsScreen from '../screens/settingsScreen';

export const AppDrawerNavigator= createDrawerNavigator({
  Home:{screen: AppTabNavigator},
  Donations:{screen: DonateScreen},
  Settings:{screen: SettingsScreen},
},
{
  initialRouteName:'Home'
})


