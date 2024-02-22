import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import JoinStep1 from '../JoinStep1';
import {useNavigation} from '@react-navigation/native';
import {LoginStackNavigationTypes} from '@typedef/routes/login.stack.types';

type Props = {};

const JoinStep1Container = (props: Props) => {
  const navigation = useNavigation<LoginStackNavigationTypes>();

  const onNextPressed = useCallback(() => {
    navigation.navigate('joinStep2');
  }, []);

  return <JoinStep1 onNextPressed={onNextPressed} />;
};

export default JoinStep1Container;
