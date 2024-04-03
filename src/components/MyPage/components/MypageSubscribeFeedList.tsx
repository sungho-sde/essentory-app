import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {Poppins, Pretendard} from '@assets/fonts';
import {prevColors} from '@assets/colors';
import TextFeedCardContainer from '@components/Common/FeedCards/TextFeed/containers/TextFeedCardContainer';
import FundingFeedCardContainer from '@components/Common/FeedCards/FundingFeed/containers/FundingFeedCardContainer';
import AudioFeedCardContainer from '@components/Common/FeedCards/AudioFeed/containers/AudioFeedCardContainer';
import {hasNotch} from 'react-native-device-info';
import FastImage from 'react-native-fast-image';
import MypageSubscribeFeedCardContainer from '../containers/MypageSubscribeFeedCardContainer';

type Props = {};

const MypageSubscribeFeedList = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingBottom: hasNotch() ? 52 : 80,
          paddingHorizontal: 20,
          paddingTop: 24,
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 24,
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
        renderItem={() => {
          return <MypageSubscribeFeedCardContainer />;
        }}
      />
    </View>
  );
};

export default MypageSubscribeFeedList;
