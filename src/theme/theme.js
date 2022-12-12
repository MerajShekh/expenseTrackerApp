import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#6957E7',
      secondary: '#111B52',
      error: '#D32F2F',
      text1: '#111B52',
      text2: '#B1B1B1',
      border: '#6957E7',
      activeTab: '#1976D2',
      inactiveTab: '#757575',
      background: '#F6F9FE',
      btnText: '#FFFFFF',
      incom: '#00BC7D',
      expense: '#E34C43',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#212121',
      secondary: '#29434E',
      error: '#D32F2F',
      text: '#FFFFFF',
      border: '#FFFFFF',
      activeTab: '#4FC3F7',
      inactiveTab: '#FFFFFF',
      btnText: '#FFFFFF',
      incom: '#00BC7D',
      expense: '#E34C43',
    },
  },
};
