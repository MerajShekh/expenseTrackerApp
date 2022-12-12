import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

export const CircularProgress = ({
  size = 70,
  width = 6,
  fill = 60,
  backgroundWidth = 2,
  tintColor = '#FFCA3A',
  lineCap = 'round',
  rotation = 0,
  padding = 5,
  style = {},
  childrenContainerStyle = {},
  backgroundColor = '#FFFFFF',
  children,
}) => {
  return (
    <AnimatedCircularProgress
      size={size}
      width={width}
      fill={fill}
      backgroundWidth={backgroundWidth}
      tintColor={tintColor}
      lineCap={lineCap}
      rotation={rotation}
      padding={padding}
      style={style}
      childrenContainerStyle={childrenContainerStyle}
      backgroundColor={backgroundColor}>
      {fill => {
        if (children) {
          return children;
        } else {
          return (
            <Text
              style={{fontSize: 16, fontWeight: '600', color: backgroundColor}}>
              {fill}%
            </Text>
          );
        }
      }}
    </AnimatedCircularProgress>
  );
};

const styles = StyleSheet.create({});
