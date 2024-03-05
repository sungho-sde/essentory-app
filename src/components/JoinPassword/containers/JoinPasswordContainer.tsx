import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import JoinPassword from '../JoinPassword';
import {useNavigation} from '@react-navigation/native';
import {LoginStackNavigationTypes} from '@typedef/routes/login.stack.types';

type Props = {};

const JoinPasswordContainer = (props: Props) => {
  const navigation = useNavigation<LoginStackNavigationTypes>();

  const onSubmitPressed = useCallback(() => {
    navigation.navigate('checkEmailVerification');
  }, []);

  return <JoinPassword onSubmitPressed={onSubmitPressed} />;
};

export default JoinPasswordContainer;
