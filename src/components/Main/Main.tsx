import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamsListTypes} from '@typedef/routes/main.tab.types';
import HomeContainer from '@components/Home/containers/HomeContainer';

import CustomTabBar from './components/CustomTabBar';
import colors from '@assets/colors';
import ExploreContainer from '@components/Explore/containers/ExploreContainer';
import MyPageContainer from '@components/MyPage/containers/MyPageContainer';
import FeedContainer from '@components/Feed/containers/FeedContainer';

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
            backgroundColor: colors.BLACK001000,
          },
          headerTitleStyle: {
            color: colors.BLACK001000,
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
          component={HomeContainer}
          options={{
            title: '홈',
          }}
        />
        <Tab.Screen
          name="funding"
          component={ExploreContainer}
          options={{
            title: '탐색',
          }}
        />
        <Tab.Screen
          name="community"
          component={HomeContainer}
          options={{
            title: '홈',
          }}
        />
        <Tab.Screen
          name="search"
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
