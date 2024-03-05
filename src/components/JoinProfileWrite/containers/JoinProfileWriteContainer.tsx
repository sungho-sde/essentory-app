import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import JoinProfileWrite from '../JoinProfileWrite';
import {JoinProfileWriteParamTypes} from '@typedef/routes/login.stack.types';
import {API, originUrl, requestPost} from '@lib/request';
import {ReqSignUpTypes} from '@typedef/lib/request.types';

type Props = {};

const JoinProfileWriteContainer = ({
  route: {
    params: {uid},
  },
}: JoinProfileWriteParamTypes) => {
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
    console.log(uid, userId, userName);
    const responseFromServer = await requestPost<
      ReqSignUpTypes,
      {
        uid: string;
        username: string;
        display_name: string;
        email: string;
        profile_picture_url: string | null;
        status: 'Active' | 'Deactive';
        created_at: Date;
      }
    >(originUrl + API.auth.signup, {
      uid,
      username: userId,
      display_name: userName,
    });
    console.log(responseFromServer);
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
