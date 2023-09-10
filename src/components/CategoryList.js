import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';

export const CategoryList = ({data, value, onChange}) => {
  const [selected, setSelected] = useState(1);
  const {colors} = useTheme();
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              // setSelected(item._id);
              onChange(item._id);
              console.log('Selected', item._id);
            }}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}>
            <Text
              style={{
                color: value === item._id ? colors.primary : colors.textTwo,
                fontWeight: value === item._id ? '600' : 'normal',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        extraData={({item}) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
