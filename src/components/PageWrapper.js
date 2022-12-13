import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const PageWrapper = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
});
