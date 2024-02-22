import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import colors from '@assets/colors';
import {Pretendard} from '@assets/fonts';
import TextFeedCardContainer from '@components/Common/FeedCards/TextFeed/containers/TextFeedCardContainer';
import FundingFeedCardContainer from '@components/Common/FeedCards/FundingFeed/containers/FundingFeedCardContainer';
import AudioFeedCardContainer from '@components/Common/FeedCards/AudioFeed/containers/AudioFeedCardContainer';
import {hasNotch} from 'react-native-device-info';

type Props = {};

const MypageContentSaveBoxList = (props: Props) => {
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
        }}
        showsVerticalScrollIndicator={false}
        data={['renderOnly']}
        renderItem={() => {
          return (
            <View
              style={{
                paddingTop: 24,
              }}>
              <FlatList
                horizontal
                contentContainerStyle={{
                  paddingHorizontal: 20,
                }}
                showsHorizontalScrollIndicator={false}
                data={['전체', '영상', '이미지', '글', '오디오', '펀딩']}
                ItemSeparatorComponent={() => (
                  <View
                    style={{
                      width: 8,
                    }}
                  />
                )}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: 14,
                        paddingVertical: 8,
                        backgroundColor: colors.MAIN,
                        borderWidth: 1,
                        borderColor: colors.MAIN,
                        borderRadius: 44,
                      }}>
                      <Text
                        style={[
                          Pretendard.Bold,
                          {
                            fontSize: 14,
                            color: colors.BLACK200000,
                          },
                        ]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
              <FlatList
                style={{
                  marginTop: 24,
                  paddingHorizontal: 20,
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
                    type: 'funding',
                  },
                  {
                    type: 'audio',
                  },
                ]}
                renderItem={({item}) => {
                  if (item.type === 'text') {
                    return <TextFeedCardContainer />;
                  }
                  if (item.type === 'funding') {
                    return <FundingFeedCardContainer />;
                  }

                  if (item.type === 'audio') {
                    return <AudioFeedCardContainer />;
                  }

                  return <View />;
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default MypageContentSaveBoxList;
