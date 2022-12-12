import React from 'react';
import {View, Text, useColorScheme, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {theme} from '../theme';
import {Loader} from '../components';

const RootNavigator = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={theme[scheme]}>
      <Loader isVisible={false} />
      {0 ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
