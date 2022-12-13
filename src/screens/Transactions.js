import {
  SectionList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {typography} from '../theme/typography';
import {CategoryList, Divider, InputField, PageWrapper} from '../components';
import {
  categoriesData,
  transactionsData,
  transactionsList,
} from '../constants/dummyData';
import {shadow} from '../theme';

export const Transactions = () => {
  const {colors} = useTheme();
  const [search, setSearch] = useState(null);

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
        <CategoryList data={categoriesData} />
      </View>
      <View style={{paddingVertical: 10}}>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={transactionsList}
          renderSectionHeader={({section: {title}}) => (
            <Text
              style={[
                typography.label,
                {paddingVertical: 15, color: colors.secondary},
              ]}>
              {title}
            </Text>
          )}
          renderItem={({item}) => {
            const category = categoriesData.filter(
              c => c.id === item.categoryId,
            )[0];
            return (
              <View style={[shadow.primary, styles.transactionBox]}>
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
          }}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  transactionBox: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
