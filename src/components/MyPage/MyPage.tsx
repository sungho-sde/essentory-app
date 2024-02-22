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
      }}>
      <View
        style={{
          height: 56,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <Text
          style={[
            Pretendard.SemiBold,
            {
              fontSize: 20,
              color: 'white',
            },
          ]}>
          마이페이지
        </Text>
        <TouchableOpacity onPress={onSettingPressed}>
          <Image source={images.icons.setting.white} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingVertical: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            marginRight: 8,
          }}>
          <FastImage
            style={{
              width: 56,
              aspectRatio: 1 / 1,
              borderRadius: 56,
              marginRight: 12,
            }}
            source={{
              uri: 'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80',
            }}
          />
          <Text
            numberOfLines={1}
            style={[
              Pretendard.Bold,
              {
                fontSize: 18,
                color: 'white',
                flex: 1,
              },
            ]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            commodi soluta optio facilis iure assumenda aut ad maxime eligendi
            eius molestias porro, officiis corrupti est ullam eveniet voluptates
            voluptas obcaecati.
          </Text>
        </View>
        <TouchableOpacity
          onPress={onModifyProfilePressed}
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 42,
            backgroundColor: colors.BLACK000000,
          }}>
          <Text
            style={[
              Pretendard.Regular,
              {
                fontSize: 12,
                color: 'white',
              },
            ]}>
            프로필 편집
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          style={{
            marginTop: 32,
            position: 'relative',
            zIndex: 2,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[
            {
              id: 'subscribes',
              title: '구독중',
            },
            {
              id: 'savedContentsBox',
              title: '콘텐츠 보관함',
            },
            {
              id: 'recentViewContents',
              title: '최근 본 콘텐츠',
            },
            {
              id: 'participatedFundingContents',
              title: '참여한 펀딩 콘텐츠',
            },
          ]}
          ItemSeparatorComponent={() => <View style={{width: 32}} />}
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  onTabPressed(item.id as MyPageTabTypes);
                }}
                style={[
                  {
                    paddingBottom: 16,
                  },
                  currentTab === item.id && {
                    borderBottomWidth: 1,
                    borderBottomColor: 'white',
                  },
                ]}>
                <Text
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 16,
                      color: 'white',
                    },
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        <View
          style={{
            width: '100%',
            backgroundColor: colors.BLACK000000,
            height: 1,
            position: 'relative',
            bottom: 1,
          }}
        />
      </View>
      {currentTab === 'subscribes' && <MypageSubscribeFeedListContainer />}
      {currentTab === 'savedContentsBox' && (
        <MypageContentSaveBoxListContainer />
      )}
      {currentTab === 'recentViewContents' && (
        <MypageRecentViewContentsContainer />
      )}
      {currentTab === 'participatedFundingContents' && (
        <MypageParticipatedFundingContentsListContainer />
      )}
    </View>
  );
};

export default MyPage;
