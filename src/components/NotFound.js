import {StyleSheet, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import React from 'react';

const NotFound = () => {
  return (
    <View style={styles.container}>
      <View
        role="img"
        aria-label="add-descript"
        className="anticon add-descript-icons">
        <Svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.708 47.385L35.718 41.374L29.708 35.364C28.146 33.802 28.146 31.269 29.708 29.707C31.269 28.145 33.804 28.145 35.364 29.707L41.375 35.718L47.385 29.707C48.945 28.145 51.479 28.145 53.041 29.707C54.604 31.269 54.604 33.802 53.041 35.364L47.031 41.374L53.041 47.385C54.604 48.947 54.604 51.48 53.041 53.041C52.261 53.822 51.236 54.213 50.213 54.213C49.189 54.213 48.165 53.822 47.385 53.041L41.375 47.031L35.364 53.041C34.584 53.822 33.56 54.213 32.536 54.213C31.513 54.213 30.489 53.822 29.708 53.041C28.146 51.48 28.146 48.947 29.708 47.385ZM69.749 41.374C69.749 57.02 57.02 69.749 41.375 69.749C25.729 69.749 13 57.02 13 41.374C13 25.729 25.729 13 41.375 13C57.02 13 69.749 25.729 69.749 41.374ZM69.762 64.105C74.756 57.878 77.749 49.978 77.749 41.374C77.749 21.285 61.464 5 41.375 5C21.285 5 5 21.285 5 41.374C5 61.463 21.285 77.749 41.375 77.749C49.978 77.749 57.878 74.755 64.106 69.762L88.169 93.824C88.949 94.606 89.974 94.996 90.997 94.996C92.021 94.996 93.045 94.606 93.825 93.824C95.388 92.263 95.388 89.73 93.825 88.168L69.762 64.105Z"
            fill="#E5E7EB"></Path>
        </Svg>
      </View>
      <Text style={styles.title}>No result found</Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '10%',
  },
  title: {
    textAlign: 'center',
    fontWeight: '800',
  },
});
