import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../navigation/Header';
import {InputField, PageWrapper} from '../../components';
import {TextInput} from 'react-native-paper';

export const AddTransaction = ({navigation, route}) => {
  const {page} = route.params;
  const [form, setForm] = useState({});

  const handleInput = e => {
    console.log('E', e);
  };
  return (
    <SafeAreaView>
      <Header title={`Add ${page}`} backArrow navigation={navigation} />
      <PageWrapper>
        <Text>Add {page.toUpperCase()}</Text>
        <View>
          <InputField
            name="amount"
            placeholder="Enter Amount"
            onInput={handleInput}
            value={form.amount}
          />
          <TextInput
            label="Email"
            mode="outlined"
            value={form.amount}
            onChangeText={handleInput}
          />
        </View>
      </PageWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
