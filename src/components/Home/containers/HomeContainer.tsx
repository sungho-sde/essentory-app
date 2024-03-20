import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Home from '../Home';
import {useNavigation} from '@react-navigation/native';
import {CommonStackNavigationTypes} from '@typedef/routes/common.stack.types';

type Props = {};

const HomeContainer = (props: Props) => {
  const navigation = useNavigation<CommonStackNavigationTypes>();

  return <Home />;
};

export default HomeContainer;
