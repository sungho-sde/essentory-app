import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import CheckEmailVerification from '../CheckEmailVerification';
import {useNavigation} from '@react-navigation/native';
import {
  CheckEmailVerificationParamTypes,
  LoginStackNavigationTypes,
} from '@typedef/routes/login.stack.types';
import {API, originUrl, requestGet} from '@lib/request';

const CheckEmailVerificationContainer = ({
  route: {
    params: {uid},
  },
}: CheckEmailVerificationParamTypes) => {
  const navigation = useNavigation<LoginStackNavigationTypes>();

  const onSubmitPressed = useCallback(async () => {
    const responseFromServer = await requestGet<{
      uid: string; // 확인한 uid
      email_verified: boolean; // 인증 여부
    }>(originUrl + API.auth.checkEmailVerified + uid);

    console.log(responseFromServer);

    if (!responseFromServer.email_verified) {
      console.log('no verified');
      return;
    }

    navigation.navigate('joinProfileWrite', {
      uid,
    });
  }, [uid]);

  return <CheckEmailVerification onSubmitPressed={onSubmitPressed} />;
};

export default CheckEmailVerificationContainer;
