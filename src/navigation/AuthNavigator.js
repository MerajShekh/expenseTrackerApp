import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register} from '../screens';
import {NAVIGATION} from '../constants/navigation';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.Login}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NAVIGATION.Register}
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
