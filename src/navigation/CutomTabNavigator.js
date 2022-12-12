import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const CutomTabNavigator = ({state, descriptors, navigation}) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 10,
        backgroundColor: colors.background,
        elevation: 20,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };
        return (
          <TouchableOpacity
            key={index}
            testID={options.tabBarTestID}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: 'auto',
            }}>
            {options.tabBarIcon && (
              <Image
                source={options.tabBarIcon}
                style={{
                  height: 28,
                  width: 28,
                  tintColor: isFocused ? colors.primary : colors.inactiveTab,
                }}
              />
            )}
            <Text
              style={{
                color: isFocused ? colors.primary : '#B1B1B1',
                textAlign: 'center',
                fontSize: 14,
                fontWeight: '500',
              }}>
              {isFocused ? label : null}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CutomTabNavigator;

const styles = StyleSheet.create({});
