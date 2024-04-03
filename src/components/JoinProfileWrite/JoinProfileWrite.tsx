import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {Pretendard} from '@assets/fonts';
import TextInputComponentContainer from '@components/Common/Input/TextInputComponent/containers/TextInputComponentContainer';
import UserIdInputComponentContainer from '@components/Common/Input/UserIdInputComponent/containers/UserIdInputComponentContainer';
import {colors} from '@assets/colors';

type Props = {
  isReadyForSignUp: boolean;
  onUserIdTextChanged: (txt: string) => void;
  onUserNameTextChanged: (txt: string) => void;
  getUserIdDuplicated: (e: boolean) => void;
  onSubmitPressed: () => void;
};

const JoinProfileWrite = ({
  isReadyForSignUp,
  onUserIdTextChanged,
  onUserNameTextChanged,
  getUserIdDuplicated,
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
        bounces={false}
        data={['renderOnly']}
        renderItem={() => {
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
                    color: colors.fill10,
                  },
                ]}>
                프로필을 만들어주세요
              </Text>
              <Text
                style={[
                  Pretendard.Regular,
                  {
                    fontSize: 15,
                    color: colors.fill10,
                    marginTop: 8,
                  },
                ]}>
                아이디와 닉네임은 추후 변경이 가능합니다
              </Text>
              <View
                style={{
                  marginTop: 24,
                  flexDirection: 'column',
                  gap: 24,
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    gap: 8,
                  }}>
                  <Text
                    style={[
                      Pretendard.SemiBold,
                      {
                        fontSize: 15,
                        color: 'white',
                      },
                    ]}>
                    아이디
                  </Text>
                  <UserIdInputComponentContainer
                    onTextChanged={onUserIdTextChanged}
                    onUserIdDuplicated={getUserIdDuplicated}
                  />
                  <Text
                    style={[
                      Pretendard.Regular,
                      {
                        fontSize: 12,
                        color: colors.fill10,
                      },
                    ]}>
                    프로필에 사용하실 고유 아이디입니다
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    gap: 8,
                  }}>
                  <Text
                    style={[
                      Pretendard.SemiBold,
                      {
                        fontSize: 15,
                        color: 'white',
                      },
                    ]}>
                    닉네임
                  </Text>
                  <TextInputComponentContainer
                    onTextChanged={onUserNameTextChanged}
                  />
                  <Text
                    style={[
                      Pretendard.Regular,
                      {
                        fontSize: 12,
                        color: colors.fill10,
                      },
                    ]}>
                    본인을 잘 표현해 줄 닉네임을 만들어주세요
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                disabled={!isReadyForSignUp}
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
                      color: isReadyForSignUp ? colors.fill10 : colors.fill40,
                    },
                  ]}>
                  다음
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default JoinProfileWrite;
