import {View, Text, Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Login from '../Login';
import {useNavigation} from '@react-navigation/native';
import {LoginStackNavigationTypes} from '@typedef/routes/login.stack.types';
import Fauth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {appleAuth} from '@invertase/react-native-apple-authentication';

import useLoading from '@hooks/store/layouts/useLoading';
import {API, originUrl, requestPost} from '@lib/request';
import {AuthTypes} from '@typedef/store/auth.types';
import useAuth from '@hooks/store/auth/useAuth';
import useRootRouter from '@hooks/store/routes/useRootRouter';
import {getErrorMessage} from '@lib/factory';

GoogleSignin.configure({
  webClientId:
    '406674810515-l8a40f83kl5hnvflvcjrabmjmbvda7am.apps.googleusercontent.com',
});

type Props = {};

const LoginContainer = (props: Props) => {
  const navigation = useNavigation<LoginStackNavigationTypes>();

  const {__updateAuthFromHooks} = useAuth();

  const {__updateLoadingFromHooks} = useLoading();
  const {__updateRootRouterFromHooks} = useRootRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const onEmailTextChanged = useCallback((txt: string) => {
    setEmail(txt);
  }, []);

  const onPasswordTextChanged = useCallback((txt: string) => {
    setPassword(txt);
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
    navigation.navigate('joinEmailWrite');
  }, []);

  const getUserData = useCallback(async (uid: string) => {
    try {
      const responseFromServer = await requestPost<
        {uid: string; device_id: string; push_token: string},
        {
          user: AuthTypes;
        }
      >(originUrl + API.auth.signin, {
        uid,
        device_id: '',
        push_token: '',
      });
      __updateLoadingFromHooks(false);
      const {user} = responseFromServer;

      __updateAuthFromHooks(user);

      __updateRootRouterFromHooks('main');
    } catch (error) {
      // Default Error handling
      __updateLoadingFromHooks(false);

      const message = getErrorMessage(error);
      console.log(message);

      if (message === 'User does not exist') {
        navigation.navigate('joinProfileWrite', {
          uid,
        });
        return;
      }
      if (message === 'Invalid Firebase UID') {
        return; // do something..
      }

      if (message === 'Specific Error Message') {
        return; // do something..
      }

      return; // do something..
    }
  }, []);

  // 구글 로그인 로직
  const onGoogleSigninPressed = useCallback(async () => {
    __updateLoadingFromHooks(true);
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const {idToken} = await GoogleSignin.signIn();

      const googleCredential = Fauth.GoogleAuthProvider.credential(idToken);

      const {user} = await Fauth().signInWithCredential(googleCredential);

      getUserData(user.uid);
    } catch (error) {
      __updateLoadingFromHooks(false);
      console.log(error);
    }
  }, [getUserData]);

  // 애플 로그인 로직
  const onAppleSigninPressed = useCallback(async () => {
    __updateLoadingFromHooks(true);
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

      getUserData(user.uid);
      //  checkExistEmail('apple', user.email);
    } catch (error) {
      __updateLoadingFromHooks(false);
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
  }, [getUserData]);

  const onEmailAndPasswordSigninPressed = useCallback(async () => {
    if (email === '' || password === '') {
      setShowErrorMessage(true);
      return;
    }
    __updateLoadingFromHooks(true);
    try {
      const credential = await Fauth().signInWithEmailAndPassword(
        email,
        password,
      );
      setShowErrorMessage(false);
      const user = credential.user;

      // getUserData(user.uid);
    } catch (error) {
      __updateLoadingFromHooks(false);
      setShowErrorMessage(true);
      console.log(error);
      const {code, message} = error as {
        code: string;
        message: string;
      };

      if (code === 'auth/wrong-password') {
        Alert.alert(message);
        return;
      }

      if (code === 'auth/invalid-email') {
        Alert.alert(message);

        return;
      }

      if (code === 'auth/too-many-requests') {
        Alert.alert('잠시후 다시 시도해주세요');
        return;
      }
    }
  }, [email, password]);

  return (
    <Login
      showErrorMessage={showErrorMessage}
      onEmailTextChanged={onEmailTextChanged}
      onPasswordTextChanged={onPasswordTextChanged}
      onForgotPasswordPressed={onForgotPasswordPressed}
      onJoinPressed={onJoinPressed}
      onGoogleSigninPressed={onGoogleSigninPressed}
      onAppleSigninPressed={onAppleSigninPressed}
      onEmailAndPasswordSigninPressed={onEmailAndPasswordSigninPressed}
    />
  );
};

export default LoginContainer;
