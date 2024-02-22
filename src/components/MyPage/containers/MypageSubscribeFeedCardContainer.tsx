import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import MypageSubscribeFeedCard from '../components/MypageSubscribeFeedCard';
import {useNavigation} from '@react-navigation/native';
import {CommonStackNavigationTypes} from '@typedef/routes/common.stack.types';

type Props = {};

const MypageSubscribeFeedCardContainer = (props: Props) => {
  const navigation = useNavigation<CommonStackNavigationTypes>();

  const onCreatorPressed = useCallback(() => {
    navigation.navigate('creatorMainPage');
  }, []);

  return <MypageSubscribeFeedCard onCreatorPressed={onCreatorPressed} />;
};

export default MypageSubscribeFeedCardContainer;
