import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {COLORS} from '../constants';

export const Divider = ({children}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.line} />
      <View>
        {children ? (
          <Text
            style={{
              textAlign: 'center',
              paddingHorizontal: 10,
              fontWeight: '500',
            }}>
            {children}
          </Text>
        ) : null}
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
  },
});
