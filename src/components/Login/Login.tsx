import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import images from '@assets/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import colors from '@assets/colors';
import {Pretendard} from '@assets/fonts';
import {hasNotch} from 'react-native-device-info';
import TextInputComponentContainer from '@components/Common/Input/TextInputComponent/containers/TextInputComponentContainer';
import {getStatusBarHeight} from 'react-native-status-bar-height';

type Props = {
  showErrorMessage: boolean;
  onEmailTextChanged: (txt: string) => void;
  onPasswordTextChanged: (txt: string) => void;
  onForgotPasswordPressed: () => void;
  onJoinPressed: () => void;
  onGoogleSigninPressed: () => void;
  onAppleSigninPressed: () => void;
  onEmailAndPasswordSigninPressed: () => void;
};

const Login = ({
  showErrorMessage,
  onEmailTextChanged,
  onPasswordTextChanged,
  onForgotPasswordPressed,
  onJoinPressed,
  onGoogleSigninPressed,
  onAppleSigninPressed,
  onEmailAndPasswordSigninPressed,
}: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle={'light-content'} />
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{
          paddingTop: getStatusBarHeight() + 80,
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
            <TextInputComponentContainer
              placeholder="이메일"
              onTextChanged={onEmailTextChanged}
            />
          </View>
          {/* 비밀번호 입력 섹션 */}
          <View
            style={{
              marginTop: 16,
            }}>
            <TextInputComponentContainer
              placeholder="비밀번호"
              secureTextEntry
              onTextChanged={onPasswordTextChanged}
            />
          </View>
          {showErrorMessage && (
            <Text
              style={[
                Pretendard.Regular,
                {
                  fontSize: 12,
                  color: '#FF264B',
                  marginTop: 16,
                },
              ]}>
              이메일 혹은 비밀번호가 일치하지 않습니다
            </Text>
          )}
          {/* 로그인 버튼 */}
          <TouchableOpacity
            onPress={onEmailAndPasswordSigninPressed}
            style={{
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.6)',
              marginTop: 24,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
            }}>
            <Text
              style={[
                Pretendard.Bold,
                {
                  fontSize: 16,
                  color: 'rgba(255,255,255,0.15)',
                },
              ]}>
              로그인
            </Text>
          </TouchableOpacity>
          {/* 비밀번호를 잊으셨나요? */}
          <TouchableOpacity
            onPress={onForgotPasswordPressed}
            style={{
              marginTop: 8,
              height: 48,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={[
                Pretendard.SemiBold,
                {
                  fontSize: 17,
                  color: 'white',
                  textAlign: 'center',
                },
              ]}>
              비밀번호를 모르겠어요
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 16,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 16,
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              onPress={onGoogleSigninPressed}
              style={{
                width: 40,
                height: 40,
                borderRadius: 4,
                backgroundColor: 'rgba(255,255,255,0.4)',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                defaultSource={images.logo.google}
                source={images.logo.google}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onAppleSigninPressed}
              style={{
                width: 40,
                height: 40,
                borderRadius: 4,
                backgroundColor: 'rgba(255,255,255,0.4)',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                defaultSource={images.logo.apple}
                source={images.logo.apple}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
      {/* 하단 position absolute 영역 */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: hasNotch() ? 68 : 50,
          paddingHorizontal: 20,
        }}>
        <View style={{}}>
          <Text
            style={[
              Pretendard.SemiBold,
              {
                fontSize: 15,
                color: 'white',
                textAlign: 'center',
              },
            ]}>
            아직 회원이 아니신가요?
          </Text>
        </View>
        {/* 회원가입 버튼 */}
        <TouchableOpacity
          onPress={onJoinPressed}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            borderRadius: 4,
            backgroundColor: 'rgba(255,255,255,0.15)',
            marginTop: 16,
          }}>
          <Text
            style={[
              Pretendard.SemiBold,
              {
                fontSize: 17,
                color: 'rgba(255,255,255,0.95)',
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
