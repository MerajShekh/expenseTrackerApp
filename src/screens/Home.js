import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {typography, shadow} from '../theme';
import {CircularProgress, List, PageWrapper} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {getUser, getCategories} from '../selectors/userSelector';
import {getAllCategory} from '../redux/reducers/categorySlice';
import {convertBufferToBase64} from '../helper/globalFunction';
const defaultIcon = require('../assets/icons/bank.png');

export const Home = () => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const categoriesList = useSelector(getCategories);
  console.log('categoriesList', categoriesList);

  const categories = [
    {
      id: 1,
      name: 'Food',
      icon: require('../assets/icons/cutlery.png'),
      tintColor: '#35BDD0',
    },
    {
      id: 2,
      name: 'Fuel',
      icon: require('../assets/icons/fuel.png'),
      tintColor: '#8D3DAF',
    },
    {
      id: 3,
      name: 'Groceries',
      icon: require('../assets/icons/store.png'),
      tintColor: '#E03B8B',
    },
    {
      id: 4,
      name: 'Shooping',
      icon: require('../assets/icons/shopping.png'),
      tintColor: '#E07C24',
    },
    {
      id: 5,
      name: 'Online',
      icon: require('../assets/icons/bank.png'),
      tintColor: '#3DBE29',
    },
    {
      id: 6,
      name: 'Banking',
      icon: require('../assets/icons/bank.png'),
      tintColor: '#3DBE29',
    },
  ];

  const data = new Array(10).fill(0).map((_, index) => ({
    id: index,
    categoryId: Math.floor(Math.random() * 6) + 1,
    amount: Math.floor(Math.random() * 200) + 1,
  }));

  return (
    <ScrollView>
      <PageWrapper>
        {/* profile section */}
        <View style={styles.profileContainer}>
          <View
            style={[
              styles.profileContainer,
              {flex: 1, justifyContent: 'flex-start', padding: 0},
            ]}>
            <Image
              style={[styles.profileIcon, {tintColor: colors.primary}]}
              source={require('../assets/icons/user.png')}
            />
            <Text
              style={[
                typography.profileText,
                {color: colors.secondary, marginLeft: 10},
              ]}>
              {user.firstName}
            </Text>
          </View>
          <Image
            style={[styles.alertIcon, {tintColor: colors.primary}]}
            source={require('../assets/icons/notification.png')}
          />
        </View>
        {/* spent card */}
        <View
          style={[
            styles.card,
            shadow.primary,
            {backgroundColor: colors.primary},
          ]}>
          <View>
            <Text style={[typography.text, styles.commonStyle]}>Spent</Text>
            <Text style={[typography.title, styles.commonStyle]}>
              $35,580.00
            </Text>
            <Text style={[typography.error, styles.commonStyle]}>
              of $40,000.00
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <CircularProgress />
            <Text style={[typography.text, styles.commonStyle]}>November</Text>
          </View>
        </View>
        {/* category section */}
        <View style={{marginTop: 10}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}>
            <Text style={[typography.label, {color: colors.secondary}]}>
              Category
            </Text>
            <Text style={[typography.error, {color: colors.textTwo}]}>
              See All
            </Text>
          </View>

          <View style={[styles.categoryContainer]}>
            {categoriesList &&
              categoriesList.map(item => {
                return (
                  <View key={item._id} style={styles.categoryBox}>
                    <View
                      style={[
                        styles.categoryIcon,
                        shadow.primary,
                        {
                          backgroundColor: colors.background,
                        },
                      ]}>
                      <Image
                        source={
                          item.icon
                            ? {
                                uri: convertBufferToBase64(item.icon.data.data),
                              }
                            : defaultIcon
                        }
                        style={{
                          height: 30,
                          width: 30,
                          tintColor: colors.primary,
                        }}
                      />
                    </View>
                    <Text>{item.name}</Text>
                  </View>
                );
              })}
          </View>
        </View>
        {/* recent transaction */}
        <View style={{marginTop: 20, marginBottom: 10}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}>
            <Text style={[typography.label, {color: colors.secondary}]}>
              Today
            </Text>
            <Text style={[typography.error, {color: colors.textTwo}]}>
              See All
            </Text>
          </View>
          <List data={data} categories={categories} />
        </View>
      </PageWrapper>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  profileIcon: {
    height: 35,
    width: 35,
  },
  alertIcon: {
    height: 25,
    width: 25,
    borderWidth: 1,
    float: 'right',
  },
  card: {
    backgroundColor: '#6957E7',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commonStyle: {
    color: '#FFF',
    letterSpacing: 1,
    paddingVertical: 2,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  categoryBox: {
    height: 95,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '29.8%',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  categoryIcon: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 67,
    width: 67,
  },
});
