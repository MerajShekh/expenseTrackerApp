import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {typography, shadow} from '../theme';
import {Divider} from './Divider';

export const List = ({data, categories}) => {
  const {colors} = useTheme();

  return (
    <View style={[shadow.primary, styles.listContainer]}>
      {data &&
        data.map((item, index) => {
          const category = categories.filter(c => c.id === item.categoryId)[0];

          return (
            <View key={index}>
              <View style={styles.listItem}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={category.icon}
                    style={{
                      width: 25,
                      height: 30,
                      tintColor: category.tintColor,
                    }}
                  />
                  <View style={{paddingLeft: 15}}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: '500',
                        color: colors.secondary,
                      }}>
                      {category.name}
                    </Text>
                    <TouchableOpacity onPress={() => alert('Click')}>
                      <Text style={{fontSize: 11, color: colors.primary}}>
                        View Details
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <Text style={typography.text && {color: colors.expense}}>
                    - ₹{item.amount.toFixed(2)}
                  </Text>
                </View>
              </View>
              <Divider />
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
