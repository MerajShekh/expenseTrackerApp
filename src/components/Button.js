import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '@react-navigation/native';
import {typography} from '../theme';

export const Button = ({title, style, textStyle, fill, ...rest}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          borderColor: fill ? null : colors.border,
          backgroundColor: fill ? colors.secondary : null,
        },
        style,
      ]}
      {...rest}>
      <Text
        style={[
          {color: fill ? colors.btnText : colors.primary, letterSpacing: 2},
          typography.label,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  fill: PropTypes.bool,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
  fill: false,
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
});
