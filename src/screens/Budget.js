import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {PageWrapper} from '../components';
import Header from '../navigation/Header';
import {useTheme} from '@react-navigation/native';
import {typography, shadow} from '../theme';
import {categoriesData} from '../constants/dummyData';
import {ProgressBar, MD3Colors} from 'react-native-paper';

export const Budget = ({navigation}) => {
  const {colors} = useTheme();

  const renderCategory = category => {
    return (
      <View
        key={category.id}
        style={[
          shadow.primary,
          styles.listItem,
          {backgroundColor: colors.backgroundWhite},
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
          <View
            style={{
              paddingLeft: 15,
              width: '92%',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: colors.secondary,
                }}>
                {category.name}
              </Text>

              <Text style={typography.text && {color: colors.textOne}}>
                ₹100
              </Text>
            </View>
            <ProgressBar
              animatedValue={0.7} // value (between 0 and 1)
              color={category.tintColor}
              style={{height: 7, marginTop: 5, borderRadius: 5}}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Header title="Budget" profile notification navigation={navigation} />
      <ScrollView>
        <PageWrapper>
          <View style={styles.graphContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{alignItems: 'center'}}>
                <Text>Total Budget</Text>
                <Text style={[typography.text, {color: colors.textOne}]}>
                  ₹10000
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text>Total Spend</Text>
                <Text style={[typography.text, {color: colors.expense}]}>
                  ₹5000
                </Text>
              </View>
            </View>
          </View>
          <Button
            title="Edit Budget"
            onPress={() => navigation.navigate('budgetdetail')}
          />
          <View style={styles.categoryContainer}>
            {categoriesData.map(c => renderCategory(c))}
          </View>
        </PageWrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  graphContainer: {
    paddingVertical: 20,
  },
  categoryContainer: {
    paddingTop: 10,
  },
  listItem: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 5,
    marginVertical: 5,
  },
});
