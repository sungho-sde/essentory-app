import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import Login from '../Login';
import {useNavigation} from '@react-navigation/native';
import {LoginStackNavigationTypes} from '@typedef/routes/login.stack.types';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '406674810515-5g03c3tm8fbfckr9ctk84nhp9lnq33fn.apps.googleusercontent.com',
});

type Props = {};

const LoginContainer = (props: Props) => {
  const navigation = useNavigation<LoginStackNavigationTypes>();

  /**
   * @desc 로그인 버튼 눌렀을때 작동하는 네트워크 버튼입니다
   */
  const onLoginPressed = useCallback(() => {
    console.log('on login pressed');
  }, []);

  /**
   * @desc 비밀번호를 잊으셨나요? 버튼 눌렀을때 작동하는 네비게이션 버튼입니다
   */
  const onForgotPasswordPressed = useCallback(() => {
    navigation.navigate('forgotPassword');
  }, []);

  /**
   * @desc 로그인 버튼 눌렀을때 작동하는 네비게이션 버튼입니다
   */
  const onJoinPressed = useCallback(() => {
    navigation.navigate('joinStep1');
  }, []);

  const onGoogleSigninPressed = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Login
      onLoginPressed={onLoginPressed}
      onForgotPasswordPressed={onForgotPasswordPressed}
      onJoinPressed={onJoinPressed}
      onGoogleSigninPressed={onGoogleSigninPressed}
    />
  );
};

export default LoginContainer;
