import * as React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import DonateScreen from '../screens/donateScreen';

export const AppStackNavigator= createStackNavigator({
  DonateList:{
    screen: DonateScreen,
    navigationOptions:{
      headerShown: false
    }
  }
},
{
  initialRouteName:'DonateList'
})