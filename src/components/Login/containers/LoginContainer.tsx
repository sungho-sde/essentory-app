import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import Login from '../Login';
import {useNavigation} from '@react-navigation/native';
import {LoginStackNavigationTypes} from '@typedef/routes/login.stack.types';
import Fauth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {appleAuth} from '@invertase/react-native-apple-authentication';

GoogleSignin.configure({
  webClientId:
    '406674810515-l8a40f83kl5hnvflvcjrabmjmbvda7am.apps.googleusercontent.com',
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
      const asd = await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      console.log(asd);
      const {
        user: {email},
        idToken,
      } = await GoogleSignin.signIn();

      const googleCredential = Fauth.GoogleAuthProvider.credential(idToken);
      console.log(googleCredential);
      const {user} = await Fauth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onAppleSigninPressed = useCallback(async () => {
    try {
      // Start the sign-in request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL],
      });

      // Ensure Apple returned a user identityToken
      if (!appleAuthRequestResponse.identityToken) {
        throw 'Apple Sign-In failed - no identify token returned';
      }

      // Create a Firebase credential from the response
      const {
        user: newUser,
        email,
        realUserStatus,
        identityToken,
        nonce,
      } = appleAuthRequestResponse;
      console.log(appleAuthRequestResponse);
      const appleCredential = Fauth.AppleAuthProvider.credential(
        identityToken,
        nonce,
      );

      if (realUserStatus === appleAuth.UserStatus.UNKNOWN) {
        console.log("I'm a shadow person!");
      }

      if (realUserStatus === appleAuth.UserStatus.LIKELY_REAL) {
        console.log("I'm a real person!");
      }

      // Sign the user in with the credential
      const {user} = await Fauth().signInWithCredential(appleCredential);

      console.log(user);
      if (!user.email) {
        return;
      }

      //  checkExistEmail('apple', user.email);
    } catch (error) {
      console.log(error);
      const {code} = error as {
        code: string;
      };
      if (code === appleAuth.Error.CANCELED) {
        console.warn('User canceled Apple Sign in.');
      }
      if (code === 'auth/provider-already-linked') {
        // console.log(error);
        // navigation.navigate('join', {
        //   provider: 'apple',
        //   email: appleEmail,
        // });
      }
      if (code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }, []);

  return (
    <Login
      onLoginPressed={onLoginPressed}
      onForgotPasswordPressed={onForgotPasswordPressed}
      onJoinPressed={onJoinPressed}
      onGoogleSigninPressed={onGoogleSigninPressed}
      onAppleSigninPressed={onAppleSigninPressed}
    />
  );
};

export default LoginContainer;
