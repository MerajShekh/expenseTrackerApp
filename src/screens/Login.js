import {
  StyleSheet,
  Text,
  View,
  TextFied,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {strings} from '../localization';
import {InputField, Divider, Button} from '../components';
import {spacing} from '../theme';
import {ICONS} from '../assets';

export const Login = () => {
  const {colors} = useTheme();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <View style={{flex: 1, padding: 20}}>
        <Text
          style={{
            color: colors.text1,
            fontSize: spacing.l,
            textAlign: 'center',
            marginVertical: 50,
            fontWeight: 'bold',
            letterSpacing: 2,
          }}>
          Login
        </Text>
        <InputField
          name="email"
          placeholder={strings.login.usernameHint}
          onInput={setEmail}
          value={email}
        />
        <InputField
          name="password"
          placeholder={strings.login.passwordHint}
          onInput={setPassword}
          value={password}
          customStyle={{marginTop: 10}}
        />
        <Text
          style={{
            textAlign: 'right',
            color: colors.text2,
            marginTop: 10,
            fontWeight: '500',
          }}>
          Forgot Password ?
        </Text>
        <Button title="Login" fill style={{marginTop: 40}} />
        <View style={{marginTop: 50}}>
          <Divider>Or login with</Divider>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Image source={ICONS.google} style={{width: 30, height: 30}} />
          <Image
            source={ICONS.facebook}
            style={{width: 30, height: 30, marginLeft: 10}}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Don't have account?
          </Text>
          <TouchableOpacity style={{marginLeft: 5, fontWeight: 'bold'}}>
            <Text style={{color: colors.primary}}>Registers</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
