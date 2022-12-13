import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';

export const CategoryList = ({data}) => {
  const [selected, setSelected] = useState(null);
  const {colors} = useTheme();
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item.id)}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}>
            <Text
              style={{
                color: selected === item.id ? colors.primary : colors.text2,
                fontWeight: selected === item.id ? '600' : 'normal',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        extraData={({item}) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
