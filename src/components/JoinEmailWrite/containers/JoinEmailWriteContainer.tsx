import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import JoinEmailWrite from '../JoinEmailWrite';
import {useNavigation} from '@react-navigation/native';
import {LoginStackNavigationTypes} from '@typedef/routes/login.stack.types';

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

type Props = {};

const JoinEmailWriteContainer = (props: Props) => {
  const navigation = useNavigation<LoginStackNavigationTypes>();

  const [isReadyForSubmit, setIsReadyForSubmit] = useState(false);
  const [email, setEmail] = useState('');

  const onEmailTextChanged = useCallback((txt: string) => {
    setEmail(txt);
  }, []);

  const onSubmitPressed = useCallback(() => {
    navigation.navigate('joinPassword', {
      email,
    });
  }, [email]);

  // __background function__

  const checkEmailVerification = useCallback(() => {
    setIsReadyForSubmit(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    checkEmailVerification();
    return () => {};
  }, [checkEmailVerification]);

  return (
    <JoinEmailWrite
      isReadyForSubmit={isReadyForSubmit}
      onEmailTextChanged={onEmailTextChanged}
      onSubmitPressed={onSubmitPressed}
    />
  );
};

export default JoinEmailWriteContainer;
