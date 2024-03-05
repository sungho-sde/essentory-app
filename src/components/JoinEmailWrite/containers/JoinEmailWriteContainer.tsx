import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import JoinEmailWrite from '../JoinEmailWrite';
import {useNavigation} from '@react-navigation/native';
import {LoginStackNavigationTypes} from '@typedef/routes/login.stack.types';

type Props = {};

const JoinEmailWriteContainer = (props: Props) => {
  const navigation = useNavigation<LoginStackNavigationTypes>();

  const onSubmitPressed = useCallback(() => {
    navigation.navigate('joinPassword');
  }, []);

  return <JoinEmailWrite onSubmitPressed={onSubmitPressed} />;
};

export default JoinEmailWriteContainer;
