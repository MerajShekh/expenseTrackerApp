import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSelector} from 'react-redux';
//import Spinner from "react-native-spinkit";

export const Loader = () => {
  const isVisible = false;
  const {isLoading} = useSelector(state => state.loader);
  console.log('loader', isLoading);
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: isLoading ? 'flex' : 'none',
        zIndex: 2,
      }}>
      <ActivityIndicator size="large" color="#ffffff" animating={isLoading} />
    </View>
  );
};
