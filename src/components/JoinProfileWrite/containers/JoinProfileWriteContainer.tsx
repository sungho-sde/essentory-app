import {View, Text, Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import JoinProfileWrite from '../JoinProfileWrite';
import {JoinProfileWriteParamTypes} from '@typedef/routes/login.stack.types';
import {API, originUrl, requestPost} from '@lib/request';
import {ReqSignUpTypes} from '@typedef/lib/request.types';
import {getErrorMessage} from '@lib/factory';
import {AuthTypes} from '@typedef/store/auth.types';
import useAuth from '@hooks/store/auth/useAuth';
import useRootRouter from '@hooks/store/routes/useRootRouter';

type Props = {};

const JoinProfileWriteContainer = ({
  route: {
    params: {uid},
  },
}: JoinProfileWriteParamTypes) => {
  const {__updateRootRouterFromHooks} = useRootRouter();
  const {__updateAuthFromHooks} = useAuth();

  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [isUserIdDuplicated, setIsUserIdDuplicated] = useState(false);

  const [isReadyForSignUp, setIsReadyForSignUp] = useState(false);

  const onUserIdTextChanged = useCallback((txt: string) => {
    setUserId(txt);
  }, []);

  const onUserNameTextChanged = useCallback((txt: string) => {
    setUserName(txt);
  }, []);

  const getUserIdDuplicated = useCallback((e: boolean) => {
    setIsUserIdDuplicated(e);
  }, []);

  const onSubmitPressed = useCallback(async () => {
    try {
      const responseFromServer = await requestPost<ReqSignUpTypes, AuthTypes>(
        originUrl + API.auth.signup,
        {
          uid,
          username: userId,
          display_name: userName,
        },
      );

      __updateAuthFromHooks(responseFromServer);

      __updateRootRouterFromHooks('main');
    } catch (error) {
      const message = getErrorMessage(error);

      console.log(message);
      Alert.alert(message);
    }
  }, [uid, userId, userName]);

  const checkSignUpVerified = useCallback(() => {
    const isReady = !isUserIdDuplicated && userName !== '' && userId !== '';

    setIsReadyForSignUp(isReady);
  }, [isUserIdDuplicated, userName, userId]);

  useEffect(() => {
    checkSignUpVerified();
  }, [checkSignUpVerified]);

  return (
    <JoinProfileWrite
      isReadyForSignUp={isReadyForSignUp}
      onUserIdTextChanged={onUserIdTextChanged}
      onUserNameTextChanged={onUserNameTextChanged}
      getUserIdDuplicated={getUserIdDuplicated}
      onSubmitPressed={onSubmitPressed}
    />
  );
};

export default JoinProfileWriteContainer;
