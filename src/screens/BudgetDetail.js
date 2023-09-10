import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {InputField, PageWrapper, Button} from '../components';
import Header from '../navigation/Header';
import {useTheme} from '@react-navigation/native';
import {typography, shadow} from '../theme';
import {categoriesData} from '../constants/dummyData';
import {Divider} from 'react-native-paper';

export const BudgetDetail = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView>
      <Header title="Edit Budget" backArrow navigation={navigation} />

      <PageWrapper>
        <View style={{marginTop: 10}}>
          <Text
            style={[
              styles.titleBtn,
              typography.label,
              {backgroundColor: colors.primary, color: colors.btnText},
            ]}>
            January
          </Text>
        </View>
      </PageWrapper>
      <View style={{height: '61%'}}>
        <ScrollView>
          <PageWrapper>
            <View
              style={[
                shadow.primary,
                {
                  marginTop: 10,
                  backgroundColor: colors.backgroundWhite,
                  borderRadius: 5,
                },
              ]}>
              {categoriesData.map(category => (
                <View key={category.id}>
                  <View
                    style={[
                      styles.listItem,
                      {
                        borderColor: colors.inactiveTab,
                      },
                    ]}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={category.icon}
                        style={{
                          width: 20,
                          height: 25,
                          tintColor: category.tintColor,
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '500',
                          color: colors.secondary,
                          marginLeft: 15,
                        }}>
                        {category.name}
                      </Text>
                    </View>
                    <InputField
                      customStyle={{
                        height: 40,
                        width: '40%',
                        marginVertical: 0,
                        borderColor: colors.inactiveTab,
                      }}
                      value="100"
                      onInput={() => {}}
                      keyboardType="numeric"
                      name={category.name}
                    />
                  </View>
                  <Divider />
                </View>
              ))}
            </View>
          </PageWrapper>
        </ScrollView>
      </View>
      <PageWrapper>
        <View style={{marginTop: 13}}>
          <Button title="Add New Category" />
          <Button
            title="Update"
            fill
            style={{
              marginTop: 10,
              backgroundColor: colors.primary,
              borderColor: colors.primary,
            }}
          />
        </View>
      </PageWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleBtn: {
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
