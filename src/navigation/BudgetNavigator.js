import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Budget, BudgetDetail} from '../screens';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();
const BudgetNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="budget"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="budget" component={Budget} />
      <Stack.Screen name="budgetdetail" component={BudgetDetail} />
    </Stack.Navigator>
  );
};

export default BudgetNavigator;

const styles = StyleSheet.create({});
