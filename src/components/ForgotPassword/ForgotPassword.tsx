import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import images from '@assets/images';
import {Pretendard} from '@assets/fonts';
import colors from '@assets/colors';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import TextInputComponentContainer from '@components/Common/Input/TextInputComponent/containers/TextInputComponentContainer';

type Props = {
  isReadyForSendEmail: boolean;
  onEmailTextChanged: (txt: string) => void;
  onSendEmailPressed: () => void;
};

const ForgotPassword = ({
  isReadyForSendEmail,
  onEmailTextChanged,
  onSendEmailPressed,
}: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <KeyboardAwareFlatList
        style={{
          flex: 1,
        }}
        bounces={false}
        data={['RO']}
        contentContainerStyle={{
          paddingTop: 8,
          paddingHorizontal: 24,
        }}
        renderItem={() => {
          return (
            <View>
              <Text
                style={[
                  Pretendard.SemiBold,
                  {
                    fontSize: 24,
                    color: 'rgba(255,255,255,0.85)',
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
                    lineHeight: 15 * 1.5,
                  },
                ]}>
                비밀번호를 다시 설정하려면 회원가입 때 사용하신 이메일 주소로
                비밀번호 재설정 링크를 보내드립니다
              </Text>
              <View
                style={{
                  marginTop: 24,
                }}>
                <Text
                  style={[
                    Pretendard.SemiBold,
                    {
                      fontSize: 15,
                      color: 'white',
                    },
                  ]}>
                  이메일
                </Text>
                <TextInputComponentContainer
                  containerStyle={{
                    marginTop: 8,
                  }}
                  keyboardType="email-address"
                  placeholder="이메일 입력"
                  placeholderTextColor="rgba(255,255,255,0.3)"
                  onTextChanged={onEmailTextChanged}
                />
                <TouchableOpacity
                  disabled={!isReadyForSendEmail}
                  onPress={onSendEmailPressed}
                  style={{
                    height: 48,
                    paddingHorizontal: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    borderRadius: 4,
                    marginTop: 8,
                    marginRight: 'auto',
                  }}>
                  <Text
                    style={[
                      Pretendard.SemiBold,
                      {
                        fontSize: 15,
                        color: !isReadyForSendEmail
                          ? 'rgba(255,255,255,0.15)'
                          : 'rgba(255,255,255,0.95)',
                      },
                    ]}>
                    재설정 이메일 보내기
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ForgotPassword;
