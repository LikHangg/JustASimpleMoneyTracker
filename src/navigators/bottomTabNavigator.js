import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import HomeScreen from '../screens/homeScreen';
import SettingScreen from '../screens/settingScreen';

const Tab = createBottomTabNavigator();

export const CustomTabBar = ({ navigation, state }) => {
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="HOME" />
    <BottomNavigationTab title="SETTING" />
  </BottomNavigation>;
};

const RootNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
