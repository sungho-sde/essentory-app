import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamsListTypes} from '@typedef/routes/main.tab.types';
import HomeContainer from '@components/Home/containers/HomeContainer';

import CustomTabBar from './components/CustomTabBar';
import {prevColors} from '@assets/colors';
import ExploreContainer from '@components/Explore/containers/ExploreContainer';
import MyPageContainer from '@components/MyPage/containers/MyPageContainer';
import FeedContainer from '@components/Feed/containers/FeedContainer';
import AlertContainer from '@components/Alert/containers/AlertContainer';
import CreatorMainPageContainer from '@components/CreatorMainPage/containers/CreatorMainPageContainer';
import MypageSubscribeFeedCardContainer from '@components/MyPage/containers/MypageSubscribeFeedCardContainer';

type Props = {};

const Tab = createBottomTabNavigator<BottomTabParamsListTypes>();

const Main = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Tab.Navigator
        initialRouteName="feed"
        tabBar={CustomTabBar}
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: prevColors.BLACK001000,
          },
          headerTitleStyle: {
            color: prevColors.BLACK001000,
          },
          headerShadowVisible: false,
        }}>
        <Tab.Screen
          name="feed"
          component={FeedContainer}
          options={{
            title: '홈',
          }}
        />
        <Tab.Screen
          name="contents"
          component={MypageSubscribeFeedCardContainer}
          options={{
            title: '콘텐츠',
          }}
        />
        <Tab.Screen
          name="community"
          component={ExploreContainer}
          options={{
            title: '커뮤니티',
          }}
        />
        <Tab.Screen
          name="alert"
          component={AlertContainer}
          options={{
            title: '알림',
          }}
        />
        <Tab.Screen
          name="profile"
          component={MyPageContainer}
          options={{
            title: '마이페이지',
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Main;
