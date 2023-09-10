import {
  SectionList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useTheme, useIsFocused} from '@react-navigation/native';
import {typography} from '../../theme/typography';
import {CategoryList, Divider, InputField, PageWrapper} from '../../components';
import {categoriesData, transactionsList} from '../../constants/dummyData';
import {shadow} from '../../theme';
import {getAllCategory} from '../../redux/reducers/categorySlice';
import {getAllTransaction} from '../../redux/reducers/transactionSlice';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../selectors/userSelector';
import {getTransactions} from '../../selectors/transactionSelector';
import NotFound from '../../components/NotFound';

import FloatButton from '../../components/FloatButton';
// categoriesData.unshift({id: 0, name: 'All'});

export const Transactions = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const {colors} = useTheme();
  const [search, setSearch] = useState();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const [selectedCategory, setSelectedCategory] = useState(1);

  useEffect(() => {
    dispatch(getAllTransaction({params: {categoryId: selectedCategory}}));
  }, [selectedCategory]);
  const categoriesList = useSelector(getCategories);
  const transactionList = useSelector(getTransactions);

  return (
    <PageWrapper>
      <Text
        style={[
          typography.title,
          {color: colors.secondary, paddingVertical: 15},
        ]}>
        Transactions
      </Text>
      <View>
        <InputField
          name="search"
          placeholder="search for transactions"
          onInput={setSearch}
          value={search}
        />
      </View>

      <View style={{paddingVertical: 5}}>
        <CategoryList
          data={categoriesList}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
      </View>

      <View
        style={{
          marginBottom: 300,
          paddingBottom: 5,
        }}>
        {transactionList ? (
          <SectionList
            showsVerticalScrollIndicator={false}
            sections={transactionList}
            renderSectionHeader={({section: {_id}}) => (
              <Text
                style={[
                  typography.label,
                  {paddingTop: 20, paddingBottom: 5, color: colors.secondary},
                ]}>
                {_id}
              </Text>
            )}
            renderItem={({item}) => {
              console.log('Item', item.category);
              const category = categoriesData.filter(
                c => c.id === item.categoryId,
              )[0];
              const {name, icon} = item.category[0];
              return (
                <View
                  style={[
                    shadow.primary,
                    styles.transactionBox,
                    {borderColor: colors.textTwo},
                  ]}>
                  <View style={styles.listItem}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        // source={icon.data}
                        source={{uri: `data:image/png;base64,${icon.data}`}}
                        style={{
                          width: 25,
                          height: 30,
                          // tintColor: category.tintColor,
                        }}
                      />
                      <View style={{paddingLeft: 15}}>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '500',
                            color: colors.secondary,
                          }}>
                          {name}
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
            }}
            keyExtractor={(item, index) => item + index}
          />
        ) : (
          <NotFound />
        )}
      </View>
      <FloatButton visible={isFocused} />
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  transactionBox: {
    flex: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});
