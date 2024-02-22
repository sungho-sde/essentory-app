import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import CreatorMainPage from '../CreatorMainPage';
import {useNavigation} from '@react-navigation/native';
import {CommonStackNavigationTypes} from '@typedef/routes/common.stack.types';

type Props = {};

const CreatorMainPageContainer = (props: Props) => {
  const navigation = useNavigation<CommonStackNavigationTypes>();

  useEffect(() => {
    // navigation.setOptions({
    //   headerStyle: {
    //     backgroundColor: 'transparent',
    //   },
    // });

    return () => {};
  }, []);

  return <CreatorMainPage />;
};

export default CreatorMainPageContainer;
