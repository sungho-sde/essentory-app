import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import CheckEmailVerification from '../CheckEmailVerification';
import {useNavigation} from '@react-navigation/native';
import {
  CheckEmailVerificationParamTypes,
  LoginStackNavigationTypes,
} from '@typedef/routes/login.stack.types';
import {API, originUrl, requestGet} from '@lib/request';
import {getErrorMessage} from '@lib/factory';

const CheckEmailVerificationContainer = ({
  route: {
    params: {uid, email},
  },
}: CheckEmailVerificationParamTypes) => {
  const navigation = useNavigation<LoginStackNavigationTypes>();

  const onSubmitPressed = useCallback(async () => {
    try {
      const responseFromServer = await requestGet<{
        uid: string; // 확인한 uid
        email_verified: boolean; // 인증 여부
      }>(originUrl + API.auth.checkEmailVerified + uid);

      console.log(responseFromServer);

      if (!responseFromServer.email_verified) {
        console.log('이메일 인증이 되지않았습니다');
        return;
      }

      navigation.navigate('joinProfileWrite', {
        uid,
      });
    } catch (error) {
      const message = getErrorMessage(error);
      console.log(message);
    }
  }, [uid]);

  return (
    <CheckEmailVerification email={email} onSubmitPressed={onSubmitPressed} />
  );
};

export default CheckEmailVerificationContainer;
