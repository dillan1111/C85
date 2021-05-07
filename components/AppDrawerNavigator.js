import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import SettingsScreen from '../screens/SettingsScreen'
import MyDonationsScreen from '../screens/MyDonationsScreen'
import CustomSideBarMenu  from './CustomSideBar';
import NotificationScreen from '../screens/NotificationScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
     screen : AppTabNavigator
    },
  MyDonations:{
     screen: MyDonationsScreen
   },
  Notification:{
     screen: NotificationScreen
   },
  Setting: {
     screen: SettingsScreen
      },
  
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })

