import {View, Text, FlatList} from 'react-native';
import React from 'react';
import TextFeedCardContainer from '@components/Common/FeedCards/TextFeed/containers/TextFeedCardContainer';

import AudioFeedCardContainer from '@components/Common/FeedCards/AudioFeed/containers/AudioFeedCardContainer';
import {hasNotch} from 'react-native-device-info';

type Props = {};

const MypageRecentViewContents = (props: Props) => {
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
            type: 'text',
          },
          {
            type: 'audio',
          },
        ]}
        renderItem={({item}) => {
          if (item.type === 'text') {
            return <TextFeedCardContainer />;
          }

          if (item.type === 'audio') {
            return <AudioFeedCardContainer />;
          }

          return <View />;
        }}
      />
    </View>
  );
};

export default MypageRecentViewContents;
