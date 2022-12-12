import {
  StyleSheet,
  Text,
  View,
  TextFied,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {strings} from '../localization';
import {InputField, Divider, Button} from '../components';
import {spacing} from '../theme';

import {ICONS} from '../assets';

export const Register = () => {
  const {colors} = useTheme();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [mobile, setMobile] = useState(null);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <ScrollView>
        <View style={{flex: 1, padding: 10}}>
          <Text
            style={{
              color: colors.text1,
              fontSize: spacing.l,
              textAlign: 'center',
              marginVertical: 30,
              fontWeight: 'bold',
              letterSpacing: 2,
            }}>
            Sign Up
          </Text>
          <InputField
            name="name"
            placeholder={strings.register.usernameHint}
            onInput={setName}
            value={name}
          />
          <InputField
            name="mobile"
            placeholder={strings.register.usermobileHint}
            onInput={setMobile}
            value={mobile}
            customStyle={{marginTop: 10}}
          />
          <InputField
            name="email"
            placeholder={strings.register.useremailHint}
            onInput={setEmail}
            value={email}
            customStyle={{marginTop: 10}}
          />
          <InputField
            name="password"
            placeholder={strings.register.passwordHint}
            onInput={setPassword}
            value={password}
            customStyle={{marginTop: 10}}
          />
          <Button title="Signup" fill style={{marginTop: 40}} />

          <View style={{marginTop: 30}}>
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
              marginTop: 10,
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
              Have account?
            </Text>
            <TouchableOpacity style={{marginLeft: 5, fontWeight: 'bold'}}>
              <Text style={{color: colors.primary}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
