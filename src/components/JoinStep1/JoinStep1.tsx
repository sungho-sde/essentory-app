import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {Pretendard} from '@assets/fonts';
import colors from '@assets/colors';
import {hasNotch} from 'react-native-device-info';

type Props = {
  onNextPressed: () => void;
};

const JoinStep1 = ({onNextPressed}: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <KeyboardAwareFlatList
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        data={['onlyRender']}
        renderItem={() => {
          return (
            <View
              style={{
                paddingTop: 16,
              }}>
              <Text
                style={[
                  Pretendard.Bold,
                  {
                    fontSize: 24,
                    color: 'white',
                    lineHeight: 32,
                  },
                ]}>
                로그인에 사용할{'\n'}
                정보를 입력해주세요
              </Text>

              {/* 아이디 입력 section */}
              <View
                style={{
                  marginTop: 32,
                }}>
                <Text
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 14,
                      color: 'white',
                    },
                  ]}>
                  아이디
                </Text>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  style={[
                    Pretendard.Regular,
                    {
                      borderRadius: 12,
                      height: 48,
                      padding: 16,
                      color: 'white',
                      borderWidth: 1,
                      borderColor: colors.BLACK000000,
                      fontSize: 16,
                      marginTop: 8,
                    },
                  ]}
                  placeholder="아이디"
                  placeholderTextColor={colors.GRAY300000}
                />
              </View>
              {/* 비밀번호 입력 section */}
              <View
                style={{
                  marginTop: 32,
                }}>
                <Text
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 14,
                      color: 'white',
                    },
                  ]}>
                  비밀번호
                </Text>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  secureTextEntry
                  style={[
                    Pretendard.Regular,
                    {
                      borderRadius: 12,
                      height: 48,
                      padding: 16,
                      color: 'white',
                      borderWidth: 1,
                      borderColor: colors.BLACK000000,
                      fontSize: 16,
                      marginTop: 8,
                    },
                  ]}
                  placeholder="비밀번호"
                  placeholderTextColor={colors.GRAY300000}
                />
                <Text
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 12,
                      color: colors.ERROR_RED,
                      marginTop: 8,
                    },
                  ]}>
                  영문/숫자/특수문자 조합 6-12자 특수문자 사용 가능해요
                </Text>
              </View>
              {/* 비밀번호 입력 section */}
              <View
                style={{
                  marginTop: 32,
                }}>
                <Text
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 14,
                      color: 'white',
                    },
                  ]}>
                  비밀번호 재확인
                </Text>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  secureTextEntry
                  style={[
                    Pretendard.Regular,
                    {
                      borderRadius: 12,
                      height: 48,
                      padding: 16,
                      color: 'white',
                      borderWidth: 1,
                      borderColor: colors.BLACK000000,
                      fontSize: 16,
                      marginTop: 8,
                    },
                  ]}
                  placeholder="비밀번호 다시 입력"
                  placeholderTextColor={colors.GRAY300000}
                />
                <Text
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 12,
                      color: colors.ERROR_RED,
                      marginTop: 8,
                    },
                  ]}>
                  영문/숫자/특수문자 조합 6-12자 특수문자 사용 가능해요
                </Text>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: hasNotch() ? 52 : 18,
        }}>
        <TouchableOpacity
          onPress={onNextPressed}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 56,
            borderRadius: 16,
            backgroundColor: colors.BLACK000000,
          }}>
          <Text
            style={[
              Pretendard.Bold,
              {
                fontSize: 16,
                color: colors.GRAY300000,
              },
            ]}>
            다음
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JoinStep1;
