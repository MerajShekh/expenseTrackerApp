import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {theme} from '../theme';
import {Loader} from '../components';
import {useSelector} from 'react-redux';
import {checkLogin} from '../selectors/userSelector';

const RootNavigator = () => {
  const scheme = useColorScheme();
  const isLoggedIn = useSelector(checkLogin);
  return (
    <NavigationContainer theme={theme[scheme]}>
      <Loader />
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
