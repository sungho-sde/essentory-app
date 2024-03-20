import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import colors from '@assets/colors';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Pretendard} from '@assets/fonts';
import images from '@assets/images';
import FastImage from 'react-native-fast-image';
import MypageSubscribeFeedListContainer from './containers/MypageSubscribeFeedListContainer';
import MypageContentSaveBoxListContainer from './containers/MypageContentSaveBoxListContainer';
import {MyPageTabTypes} from '@typedef/components/mypage.types';
import MypageRecentViewContentsContainer from './containers/MypageRecentViewContentsContainer';
import MypageParticipatedFundingContentsListContainer from './containers/MypageParticipatedFundingContentsListContainer';

type Props = {
  currentTab: MyPageTabTypes;
  onTabPressed: (tab: MyPageTabTypes) => void;
  onSettingPressed: () => void;
  onModifyProfilePressed: () => void;
};

const MyPage = ({
  currentTab,
  onTabPressed,
  onSettingPressed,
  onModifyProfilePressed,
}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.BLACK200000,
        paddingTop: getStatusBarHeight(),
      }}></View>
  );
};

export default MyPage;
