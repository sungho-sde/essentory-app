import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Pretendard} from '@assets/fonts';
import {colors} from '@assets/colors';

type Props = {
  email: string;
  openEmailPressed: () => void;
};

const PasswordResetEmailComplete = ({email, openEmailPressed}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 8,
      }}>
      <Text
        style={[
          Pretendard.SemiBold,
          {
            fontSize: 24,
            color: colors.fill10,
          },
        ]}>
        비밀번호 재설정하기
      </Text>
      <Text
        style={[
          Pretendard.Regular,
          {
            fontSize: 15,
            color: 'white',
            marginTop: 8,
          },
        ]}>
        {changeEmailToSecureText(email)}으로 비밀번호 리셋 재설정 링크를
        보냈습니다.
        {'\n'}
        이메일을 확인해 주세요
      </Text>
      <TouchableOpacity
        onPress={openEmailPressed}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          backgroundColor: 'rgba(0,0,0,0.6)',
          marginTop: 24,
          borderRadius: 4,
        }}>
        <Text
          style={[
            Pretendard.SemiBold,
            {
              fontSize: 17,
              color: true ? colors.fill10 : colors.fill40,
            },
          ]}>
          이메일 확인하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordResetEmailComplete;

function changeEmailToSecureText(email: string) {
  const emailExceptDomain = email.split('@')[0];
  const emailDomain = email.split('@')[1];

  const secureEmail = emailExceptDomain
    .split('')
    .map((item, idx) => {
      if (idx === 0 || idx === emailExceptDomain.length - 1) {
        return item;
      }

      return '*';
    })
    .join('');

  return secureEmail + '@' + emailDomain;
}
