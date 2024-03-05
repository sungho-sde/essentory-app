import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Pretendard} from '@assets/fonts';

type Props = {
  onSubmitPressed: () => void;
};

const CheckEmailVerification = ({onSubmitPressed}: Props) => {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingTop: 8,
      }}>
      <Text
        style={[
          Pretendard.SemiBold,
          {
            fontSize: 24,
            color: 'rgba(255,255,255,0.85)',
          },
        ]}>
        이메일을 확인해주세요
      </Text>
      <Text
        style={[
          Pretendard.Regular,
          {
            fontSize: 15,
            color: 'rgba(255,255,255,0.85)',
            marginTop: 8,
            lineHeight: 15 * 1.5,
          },
        ]}>
        songyh1996@gmail.com으로 인증 이메일을 발송했습니다. 이메일에서
        인증링크를 클릭해주세요
      </Text>
      <TouchableOpacity
        onPress={onSubmitPressed}
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
              color: 'rgba(255,255,255,0.85)',
            },
          ]}>
          이메일 확인하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckEmailVerification;
