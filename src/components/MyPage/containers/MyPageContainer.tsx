import {View, Text} from 'react-native';
import React, {useCallback, useState} from 'react';
import MyPage from '../MyPage';
import {MyPageTabTypes} from '@typedef/components/mypage.types';
import {useNavigation} from '@react-navigation/native';
import {CommonStackNavigationTypes} from '@typedef/routes/common.stack.types';

type Props = {};

const MyPageContainer = (props: Props) => {
  const navigation = useNavigation<CommonStackNavigationTypes>();
  const [currentTab, setCurrentTab] = useState<MyPageTabTypes>('subscribes');

  const onTabPressed = useCallback((tab: MyPageTabTypes) => {
    setCurrentTab(tab);
  }, []);

  const onModifyProfilePressed = useCallback(() => {
    navigation.navigate('modifyProfile');
  }, []);

  const onSettingPressed = useCallback(() => {
    navigation.navigate('setting');
  }, []);

  return (
    <MyPage
      currentTab={currentTab}
      onTabPressed={onTabPressed}
      onSettingPressed={onSettingPressed}
      onModifyProfilePressed={onModifyProfilePressed}
    />
  );
};

export default MyPageContainer;
