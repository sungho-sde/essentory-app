import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import colors from '@assets/colors';
import {Poppins, Pretendard} from '@assets/fonts';
import images from '@assets/images';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
import {hasNotch} from 'react-native-device-info';
import TextFeedCardContainer from '@components/Common/FeedCards/TextFeed/containers/TextFeedCardContainer';
import FundingFeedCardContainer from '@components/Common/FeedCards/FundingFeed/containers/FundingFeedCardContainer';
import AudioFeedCardContainer from '@components/Common/FeedCards/AudioFeed/containers/AudioFeedCardContainer';
import {HomeFilterTypes} from '@typedef/components/home.types';

type Props = {
  currentFilterInModal: HomeFilterTypes;
  isFilterModalOpen: boolean;
  dismissFilterModal: () => void;
  onFilterInModalPressed: (filter: HomeFilterTypes) => void;
  onFilterSubmitPressed: (filter: HomeFilterTypes) => void;
};

const Home = ({
  currentFilterInModal,
  isFilterModalOpen,
  dismissFilterModal,
  onFilterInModalPressed,
  onFilterSubmitPressed,
}: Props) => {
  return (
    <View
      style={{
        backgroundColor: colors.BLACK001000,
        flex: 1,
      }}>
      {/* Onboarding */}
      {false && (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              Pretendard.Bold,
              {
                fontSize: 24,
                color: 'white',
                textAlign: 'center',
              },
            ]}>
            Essentory에 오신걸 환영해요!
          </Text>
          <Text
            style={[
              Pretendard.Regular,
              {
                fontSize: 14,
                color: colors.GRAY100000,
                textAlign: 'center',
                marginTop: 24,
              },
            ]}>
            우리는 여러분에게 크리에이터만의 깊고{'\n'}
            본질적인 이야기를 들려줄려고 합니다.
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 16,
              borderRadius: 50,
              backgroundColor: 'white',
              marginTop: 24,
            }}>
            <Text
              style={[
                Poppins.SemiBold,
                {
                  fontSize: 16,
                  color: colors.BLACK400000,
                  marginRight: 4,
                },
              ]}>
              Find your Creator
            </Text>
            <Image source={images.icons.arrow.right.gray} />
          </TouchableOpacity>
        </View>
      )}
      {/* After Onboarding  */}
      {true && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={['renderOnly']}
          renderItem={() => {
            return (
              <View style={{flex: 1, paddingVertical: 16}}>
                {/* 크리에이터 리스트 */}
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingHorizontal: 20,
                  }}
                  data={[1, 2, 3, 4, 5, 6, 7]}
                  ItemSeparatorComponent={() => (
                    <View
                      style={{
                        width: 12,
                      }}
                    />
                  )}
                  renderItem={() => {
                    return (
                      <TouchableOpacity
                        style={{
                          width: 56,
                        }}>
                        <View
                          style={{
                            height: 72,
                            backgroundColor: colors.BLACK200000,
                            borderRadius: 72,
                            borderWidth: 1.5,
                            borderColor: colors.MAIN,
                            padding: 3,
                          }}>
                          <View
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 72,
                              backgroundColor: '#f4f4f4',
                              overflow: 'hidden',
                            }}>
                            <FastImage
                              style={{
                                width: '100%',
                                height: '100%',
                              }}
                              source={{
                                uri: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
                              }}
                            />
                          </View>
                          <View
                            style={{
                              position: 'absolute',
                              bottom: -4,
                              paddingHorizontal: 5,
                              paddingVertical: 2,
                              backgroundColor: colors.MAIN,
                              borderRadius: 50,
                              alignSelf: 'center',
                            }}>
                            <Text
                              style={[
                                Poppins.Bold,
                                {
                                  fontSize: 12,
                                  color: colors.BLACK200000,
                                },
                              ]}>
                              LIVE
                            </Text>
                          </View>
                        </View>
                        <Text
                          style={[
                            Pretendard.Bold,
                            {
                              fontSize: 12,
                              color: colors.GRAY200000,
                              textAlign: 'center',
                              marginTop: 10,
                            },
                          ]}
                          numberOfLines={1}>
                          바르셀로나
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
                {/* 피드 리스트 */}
                <FlatList
                  style={{
                    marginTop: 32,
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
                  renderItem={({item, index}) => {
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
      )}
      <Modal
        isVisible={isFilterModalOpen}
        onBackdropPress={dismissFilterModal}
        onBackButtonPress={dismissFilterModal}
        onSwipeComplete={dismissFilterModal}
        swipeDirection="down"
        style={{
          margin: 0,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            backgroundColor: colors.BLACK300,

            paddingTop: 8,
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              width: 35,
              height: 4,
              borderRadius: 4,
              backgroundColor: 'white',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 8,
              height: 56,
            }}>
            <Text
              style={[
                Pretendard.Bold,
                {
                  fontSize: 16,
                  color: 'white',
                },
              ]}>
              필터
            </Text>
            {/* <TouchableOpacity onPress={onMoreDismiss}>
              <Image source={images.chat.cancel} />
            </TouchableOpacity> */}
          </View>
          <View
            style={{
              marginTop: 14,
              flexDirection: 'column',
              gap: 16,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <TouchableOpacity
                onPress={() => {
                  onFilterInModalPressed('all');
                }}
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 52,
                  flex: 1,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderWidth: 1,
                  borderColor:
                    currentFilterInModal === 'all'
                      ? colors.MAIN
                      : colors.BLACK000000,
                  borderRadius: 50,
                  backgroundColor:
                    currentFilterInModal === 'all'
                      ? colors.MAIN
                      : colors.BLACK300,
                }}>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 8,
                  }}
                  source={
                    currentFilterInModal === 'all'
                      ? images.icons.home.filter.all.active
                      : images.icons.home.filter.all.deactive
                  }
                />
                <Text
                  style={[
                    currentFilterInModal === 'all'
                      ? Pretendard.Bold
                      : Pretendard.Regular,
                    {
                      fontSize: 14,
                      color:
                        currentFilterInModal === 'all'
                          ? colors.BLACK300
                          : 'white',
                      flex: 1,
                    },
                  ]}>
                  전체
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onFilterInModalPressed('video');
                }}
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 52,
                  flex: 1,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderWidth: 1,
                  borderColor:
                    currentFilterInModal === 'video'
                      ? colors.MAIN
                      : colors.BLACK000000,
                  borderRadius: 50,
                  backgroundColor:
                    currentFilterInModal === 'video'
                      ? colors.MAIN
                      : colors.BLACK300,
                }}>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 8,
                  }}
                  source={
                    currentFilterInModal === 'video'
                      ? images.icons.home.filter.video.active
                      : images.icons.home.filter.video.deactive
                  }
                />
                <Text
                  style={[
                    currentFilterInModal === 'video'
                      ? Pretendard.Bold
                      : Pretendard.Regular,
                    {
                      fontSize: 14,
                      color:
                        currentFilterInModal === 'video'
                          ? colors.BLACK300
                          : 'white',
                      flex: 1,
                    },
                  ]}>
                  영상
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <TouchableOpacity
                onPress={() => {
                  onFilterInModalPressed('image');
                }}
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 52,
                  flex: 1,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderWidth: 1,
                  borderColor:
                    currentFilterInModal === 'image'
                      ? colors.MAIN
                      : colors.BLACK000000,
                  borderRadius: 50,
                  backgroundColor:
                    currentFilterInModal === 'image'
                      ? colors.MAIN
                      : colors.BLACK300,
                }}>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 8,
                  }}
                  source={
                    currentFilterInModal === 'image'
                      ? images.icons.home.filter.image.active
                      : images.icons.home.filter.image.deactive
                  }
                />
                <Text
                  style={[
                    currentFilterInModal === 'image'
                      ? Pretendard.Bold
                      : Pretendard.Regular,
                    {
                      fontSize: 14,
                      color:
                        currentFilterInModal === 'image'
                          ? colors.BLACK300
                          : 'white',
                      flex: 1,
                    },
                  ]}>
                  이미지
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onFilterInModalPressed('text');
                }}
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 52,
                  flex: 1,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderWidth: 1,
                  borderColor:
                    currentFilterInModal === 'text'
                      ? colors.MAIN
                      : colors.BLACK000000,
                  borderRadius: 50,
                  backgroundColor:
                    currentFilterInModal === 'text'
                      ? colors.MAIN
                      : colors.BLACK300,
                }}>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 8,
                  }}
                  source={
                    currentFilterInModal === 'text'
                      ? images.icons.home.filter.text.active
                      : images.icons.home.filter.text.deactive
                  }
                />
                <Text
                  style={[
                    currentFilterInModal === 'text'
                      ? Pretendard.Bold
                      : Pretendard.Regular,
                    {
                      fontSize: 14,
                      color:
                        currentFilterInModal === 'text'
                          ? colors.BLACK300
                          : 'white',
                      flex: 1,
                    },
                  ]}>
                  글
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <TouchableOpacity
                onPress={() => {
                  onFilterInModalPressed('audio');
                }}
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 52,
                  flex: 1,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderWidth: 1,
                  borderColor:
                    currentFilterInModal === 'audio'
                      ? colors.MAIN
                      : colors.BLACK000000,
                  borderRadius: 50,
                  backgroundColor:
                    currentFilterInModal === 'audio'
                      ? colors.MAIN
                      : colors.BLACK300,
                }}>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 8,
                  }}
                  source={
                    currentFilterInModal === 'audio'
                      ? images.icons.home.filter.audio.active
                      : images.icons.home.filter.audio.deactive
                  }
                />
                <Text
                  style={[
                    currentFilterInModal === 'audio'
                      ? Pretendard.Bold
                      : Pretendard.Regular,
                    {
                      fontSize: 14,
                      color:
                        currentFilterInModal === 'audio'
                          ? colors.BLACK300
                          : 'white',
                      flex: 1,
                    },
                  ]}>
                  오디오
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onFilterInModalPressed('funding');
                }}
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 52,
                  flex: 1,
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderWidth: 1,
                  borderColor:
                    currentFilterInModal === 'funding'
                      ? colors.MAIN
                      : colors.BLACK000000,
                  borderRadius: 50,
                  backgroundColor:
                    currentFilterInModal === 'funding'
                      ? colors.MAIN
                      : colors.BLACK300,
                }}>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 8,
                  }}
                  source={
                    currentFilterInModal === 'funding'
                      ? images.icons.home.filter.funding.active
                      : images.icons.home.filter.funding.deactive
                  }
                />
                <Text
                  style={[
                    currentFilterInModal === 'funding'
                      ? Pretendard.Bold
                      : Pretendard.Regular,
                    {
                      fontSize: 14,
                      color:
                        currentFilterInModal === 'funding'
                          ? colors.BLACK300
                          : 'white',
                      flex: 1,
                    },
                  ]}>
                  펀딩
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* submit button section */}
          <View
            style={{
              marginTop: 34,
              paddingTop: 16,
              paddingBottom: hasNotch() ? 60 : 42,
            }}>
            <TouchableOpacity
              onPress={() => {
                onFilterSubmitPressed(currentFilterInModal);
              }}
              style={{
                height: 56,
                backgroundColor: colors.MAIN,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  Pretendard.Bold,
                  {
                    fontSize: 16,
                    color: colors.BLACK300,
                  },
                ]}>
                확인
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
