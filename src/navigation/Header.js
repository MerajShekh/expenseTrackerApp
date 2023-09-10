import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const Header = ({
  title,
  menuLeft,
  MenuRight,
  notification,
  backArrow,
  profile,
  navigation,
}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container]}>
      <View style={styles.section}>
        {profile && (
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/images/User_image.png')}
              style={styles.img}
            />
          </View>
        )}
        {menuLeft && (
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/menu.png')}
              style={{width: 25, height: 27, tintColor: colors.secondary}}
            />
          </TouchableOpacity>
        )}
        {backArrow && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/icons/go-back.png')}
              style={{width: 25, height: 27, tintColor: colors.secondary}}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.section}>
        {title && (
          <Text style={[styles.title, {color: colors.secondary}]}>{title}</Text>
        )}
      </View>
      <View style={styles.section}>
        {notification && (
          <TouchableOpacity
            onPress={() => alert('menu-vertical')}
            style={{marginRight: 10}}>
            <Image
              source={require('../assets/icons/notification.png')}
              style={{width: 25, height: 25, tintColor: colors.secondary}}
            />
          </TouchableOpacity>
        )}
        {MenuRight && (
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/menu-vertical.png')}
              style={{width: 23, height: 23, tintColor: colors.secondary}}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    elevation: 5,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    alignItems: 'center',
    flexDirection: 'row',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imgContainer: {
    height: 35,
    width: 35,
    borderRadius: 50,
    // // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  img: {
    height: 55,
    width: 55,
    borderRadius: 50,
  },
});
