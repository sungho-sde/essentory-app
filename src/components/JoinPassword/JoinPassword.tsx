import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {Pretendard} from '@assets/fonts';
import PasswordInputComponentContainer from '@components/Common/Input/PasswordInputComponent/containers/PasswordInputComponentContainer';
import {colors} from '@assets/colors';

type Props = {
  isShowPassword: boolean;
  borderType?: 'succeed' | 'error';
  password: string;
  passwordConfirm: string;
  isPasswordVerified: boolean;
  isPasswordConfirmVerified: boolean;
  isReadyForSubmit: boolean;
  onPasswordTextChanged: (txt: string) => void;
  onPasswordConfirmTextChanged: (txt: string) => void;
  onPasswordShowPressed: (isOpen: boolean) => void;
  onSubmitPressed: () => void;
};

const JoinPassword = ({
  isShowPassword,
  borderType,
  password,
  passwordConfirm,
  isPasswordVerified,
  isPasswordConfirmVerified,
  isReadyForSubmit,
  onPasswordTextChanged,
  onPasswordConfirmTextChanged,
  onPasswordShowPressed,
  onSubmitPressed,
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
        data={['renderOnly']}
        renderItem={() => {
          return (
            <View
              style={{
                paddingTop: 10,
                paddingHorizontal: 24,
              }}>
              <Text
                style={[
                  Pretendard.SemiBold,
                  {
                    fontSize: 24,
                    color: colors.fill10,
                  },
                ]}>
                비밀번호 설정하기
              </Text>
              <Text
                style={[
                  Pretendard.Regular,
                  {
                    fontSize: 15,
                    color: colors.fill10,
                    marginTop: 8,
                    lineHeight: 22.5,
                  },
                ]}>
                비밀번호를 설정해주세요. 영문, 숫자를 조합한 8자 이상으로
                만들어주세요
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
                  비밀번호
                </Text>
                <View
                  style={{
                    flexDirection: 'column',
                    gap: 8,
                    marginTop: 8,
                  }}>
                  <PasswordInputComponentContainer
                    borderType={borderType}
                    isOpenPassword={isShowPassword}
                    onPasswordOpenPressed={onPasswordShowPressed}
                    onTextChanged={onPasswordTextChanged}
                  />
                  <PasswordInputComponentContainer
                    borderType={borderType}
                    isOpenPassword={isShowPassword}
                    onPasswordOpenPressed={onPasswordShowPressed}
                    onTextChanged={onPasswordConfirmTextChanged}
                  />
                  {(!isPasswordVerified || !isPasswordConfirmVerified) && (
                    <Text
                      style={[
                        Pretendard.Regular,
                        {
                          fontSize: 12,
                          color:
                            password === '' && passwordConfirm === ''
                              ? 'rgba(255,255,255,0.5)'
                              : '#FF264B',
                        },
                      ]}>
                      영문/숫자 조합 8자 이상으로 만들어주세요
                    </Text>
                  )}
                  {password !== passwordConfirm && (
                    <Text
                      style={[
                        Pretendard.Regular,
                        {
                          fontSize: 12,
                          color: '#FF264B',
                        },
                      ]}>
                      비밀번호가 일치하는지 확인해주세요
                    </Text>
                  )}
                  {password !== '' &&
                    passwordConfirm !== '' &&
                    password === passwordConfirm && (
                      <Text
                        style={[
                          Pretendard.Regular,
                          {
                            fontSize: 12,
                            color: 'rgba(255,255,255,0.5)',
                          },
                        ]}>
                        사용가능한 비밀번호입니다
                      </Text>
                    )}
                </View>
                <TouchableOpacity
                  disabled={!isReadyForSubmit}
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
                        color: isReadyForSubmit ? colors.fill10 : colors.fill40,
                      },
                    ]}>
                    비밀번호 설정하기
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

export default JoinPassword;
