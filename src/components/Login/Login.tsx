import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import images from '@assets/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import colors from '@assets/colors';
import {Pretendard} from '@assets/fonts';
import {hasNotch} from 'react-native-device-info';
import TextInputComponentContainer from '@components/Common/Input/TextInputComponent/containers/TextInputComponentContainer';

type Props = {
  onLoginPressed: () => void;
  onForgotPasswordPressed: () => void;
  onJoinPressed: () => void;
};

const Login = ({
  onLoginPressed,
  onForgotPasswordPressed,
  onJoinPressed,
}: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{
          paddingTop: 132,
          paddingHorizontal: 20,
        }}
        style={{
          flex: 1,
        }}>
        <View>
          <Image
            style={{
              alignSelf: 'center',
            }}
            source={images.logo.loginMain}
          />
        </View>
        <View
          style={{
            marginTop: 40,
          }}>
          {/* 아이디 입력 섹션 */}
          <View>
            <TextInputComponentContainer auto />
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
                },
              ]}
              placeholder="아이디"
              placeholderTextColor={colors.GRAY300000}
            />
          </View>
          {/* 비밀번호 입력 섹션 */}
          <View
            style={{
              marginTop: 16,
            }}>
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
                },
              ]}
              placeholder="비밀번호"
              placeholderTextColor={colors.GRAY300000}
            />
          </View>
          {/* 로그인 버튼 */}
          <TouchableOpacity
            onPress={onLoginPressed}
            style={{
              height: 48,
              backgroundColor: colors.MAIN,
              marginTop: 16,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
            }}>
            <Text
              style={[
                Pretendard.Bold,
                {
                  fontSize: 16,
                  color: colors.BLACK300,
                },
              ]}>
              로그인
            </Text>
          </TouchableOpacity>
          {/* 비밀번호를 잊으셨나요? */}
          <TouchableOpacity
            onPress={onForgotPasswordPressed}
            style={{
              marginTop: 32,
            }}>
            <Text
              style={[
                Pretendard.Regular,
                {
                  fontSize: 14,
                  color: 'white',
                  textAlign: 'center',
                },
              ]}>
              비밀번호를 잊으셨나요?
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      {/* 하단 position absolute 영역 */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: hasNotch() ? 82 : 64,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.BLACK000000,
              height: 1,
            }}
          />
          <Text
            style={[
              Pretendard.Regular,
              {
                fontSize: 12,
                color: colors.GRAY300000,
                textAlign: 'center',
              },
            ]}>
            아직 회원이 아니신가요?
          </Text>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.BLACK000000,
              height: 1,
            }}
          />
        </View>
        {/* 회원가입 버튼 */}
        <TouchableOpacity
          onPress={onJoinPressed}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 48,
            borderRadius: 12,
            backgroundColor: colors.BLACK000000,
            marginTop: 32,
          }}>
          <Text
            style={[
              Pretendard.Regular,
              {
                fontSize: 16,
                color: 'white',
              },
            ]}>
            회원가입
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
