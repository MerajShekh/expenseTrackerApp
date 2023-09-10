import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {FAB, Portal, PaperProvider} from 'react-native-paper';
import {useTheme, useNavigation} from '@react-navigation/native';
const FloatButton = ({visible}) => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(visible);
  const {colors} = useTheme();

  const onStateChange = ({open}) => {
    setOpen(open);
  };
  useEffect(() => {
    !visible && setOpen(visible);
  }, [visible]);

  return (
    <Portal>
      <FAB.Group
        open={open}
        icon={open ? 'close' : 'plus'}
        style={styles.fab}
        visible={visible}
        onPress={() => console.log('Pressed')}
        onStateChange={onStateChange}
        actions={[
          {
            icon: 'plus',
            label: 'Expense',
            onPress: () =>
              navigation.navigate('addTransaction', {page: 'Expense'}),
          },
          {
            icon: 'star',
            label: 'Income',
            onPress: () =>
              navigation.navigate('addTransaction', {page: 'Income'}),
          },
        ]}
      />
    </Portal>
  );
};

export default FloatButton;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 50,
  },
});
