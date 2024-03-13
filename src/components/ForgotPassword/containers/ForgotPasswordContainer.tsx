import {View, Text, Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import ForgotPassword from '../ForgotPassword';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {LoginStackNavigationTypes} from '@typedef/routes/login.stack.types';
import useLoading from '@hooks/store/layouts/useLoading';

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

type Props = {};

const ForgotPasswordContainer = (props: Props) => {
  const navigation = useNavigation<LoginStackNavigationTypes>();
  const {__updateLoadingFromHooks} = useLoading();

  const [email, setEmail] = useState('');

  const [isReadyForSendEmail, setIsReadyForSendEmail] = useState(false);

  const onEmailTextChanged = useCallback((txt: string) => {
    setEmail(txt);
  }, []);

  const onSendEmailPressed = useCallback(async () => {
    try {
      __updateLoadingFromHooks(true);
      await auth().sendPasswordResetEmail(email);
      __updateLoadingFromHooks(false);

      navigation.replace('passwordResetEmailComplete', {
        email,
      });
    } catch (error) {
      __updateLoadingFromHooks(false);
      console.log(error);
      const {code, message} = error as {
        code: string;
        message: string;
      };

      if (code === 'auth/invalid-email') {
        Alert.alert('이메일 형식이 잘못되었습니다');
        return;
      }
    }
  }, [email]);

  // ___background functions___

  const checkEmailValidation = useCallback(() => {
    setIsReadyForSendEmail(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    checkEmailValidation();

    return () => {};
  }, [checkEmailValidation]);

  return (
    <ForgotPassword
      isReadyForSendEmail={isReadyForSendEmail}
      onEmailTextChanged={onEmailTextChanged}
      onSendEmailPressed={onSendEmailPressed}
    />
  );
};

export default ForgotPasswordContainer;
