import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {hasNotch} from 'react-native-device-info';
import FundingFeedCardContainer from '@components/Common/FeedCards/FundingFeed/containers/FundingFeedCardContainer';

type Props = {};

const MypageParticipatedFundingContentsList = (props: Props) => {
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
          paddingHorizontal: 20,
          paddingTop: 24,
          paddingBottom: hasNotch() ? 52 : 80,
        }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 24,
            }}
          />
        )}
        data={[
          {
            type: 'funding',
          },
          {
            type: 'funding',
          },
          {
            type: 'funding',
          },
          {
            type: 'funding',
          },
          {
            type: 'funding',
          },
        ]}
        renderItem={({item}) => {
          return <FundingFeedCardContainer />;
        }}
      />
    </View>
  );
};

export default MypageParticipatedFundingContentsList;
