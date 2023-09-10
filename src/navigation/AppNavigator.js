import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Budget, Profile, Stats, Transactions} from '../screens';
import CutomTabNavigator from './CutomTabNavigator';
import {NAVIGATION} from '../constants/navigation';
import BudgetNavigator from './BudgetNavigator';
import TransactionNavigator from './TransactionNavigator';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="transaction"
      tabBar={props => <CutomTabNavigator {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={NAVIGATION.Home}
        component={Home}
        options={{
          tabBarIcon: require('../assets/icons/home.png'),
        }}
      />
      <Tab.Screen
        name={NAVIGATION.Transaction}
        component={TransactionNavigator}
        options={{
          tabBarIcon: require('../assets/icons/swap.png'),
        }}
      />
      <Tab.Screen
        name={NAVIGATION.Stats}
        component={Stats}
        options={{
          tabBarIcon: require('../assets/icons/bar.png'),
        }}
      />
      <Tab.Screen
        name={NAVIGATION.Budget}
        component={BudgetNavigator}
        options={{
          tabBarIcon: require('../assets/icons/rupee.png'),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
