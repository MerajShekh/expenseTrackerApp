import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Transactions, AddTransaction} from '../screens';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();
const TransactionNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="transaction"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="transaction" component={Transactions} />
      <Stack.Screen name="addTransaction" component={AddTransaction} />
    </Stack.Navigator>
  );
};

export default TransactionNavigator;

const styles = StyleSheet.create({});
