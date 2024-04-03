import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Feed from '../Feed';
import {CommonStackNavigationTypes} from '@typedef/routes/common.stack.types';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const FeedContainer = (props: Props) => {
  const navigation = useNavigation<CommonStackNavigationTypes>();

  const onTestPressed = useCallback(() => {
    navigation.navigate('test');
  }, []);

  return <Feed />;
};

export default FeedContainer;
