import {
  View,
  Text,
  TextStyle,
  ViewStyle,
  ImageStyle,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import * as Animated from 'react-native-animatable';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import images from '@assets/images';
import {Pretendard} from '@assets/fonts';
import {colors} from '@assets/colors';

const offset = 24;
const gap = 16;

const dummy = [
  {
    backgroundImage:
      'https://mblogthumb-phinf.pstatic.net/MjAyMDAxMjFfOTUg/MDAxNTc5NTg5NDUxNzMx.eO0qQ_aVGjY-uVSt4MfW75AeiHyB6JTH2ul0dCdDb7gg.m8FBmcMTvO-bcPdzRGafqRsKFXKHRTHWrOZDBb9m2Xgg.JPEG.cncnahs136/0121_%EA%B3%A0%EC%9C%A4%EC%A0%95%EC%82%AC%EC%A7%84_(4).jpg?type=w800',
    name: '고윤정 younjung',
    desc: '윤정의 일상 모음',
  },
  {
    backgroundImage:
      'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: '조승연의 탐구생활',
    desc: "조승연 작가 공식 유튜브 채널 '조승연의 탐구생활'에 오신 것을 환영합니다.",
  },
  {
    backgroundImage:
      'https://cphoto.asiae.co.kr/listimglink/1/2022020714593034491_1644213570.jpg',
    name: '태연 Taeyeon',
    desc: 'TAEYEON Official\nTAEYEON The 5th Mini Album ‘To. X’\ntaeyeon.lnk.to/to.x',
  },
  {
    backgroundImage:
      'https://image.ajunews.com/content/image/2024/03/17/20240317160353614909.png',
    name: '한소희',
    desc: '#국제정치 #미국문화 #역사\nMLB 광팬, Jazz 매니아 김지윤 박사가 역사, 인문, 영화, 음악, 미국 정치까지 깨알같이 풀어드립니다.',
  },
];

const searchListShowAnimation: Animated.CustomAnimation<
  TextStyle & ViewStyle & ImageStyle
> = {
  from: {
    zIndex: -1,
    opacity: 0,
    transform: [
      {
        translateY: 130,
      },
    ],
  },
  to: {
    zIndex: 2,
    opacity: 1,
    transform: [
      {
        translateY: 0,
      },
    ],
  },
};

const searcListhHideAnimation: Animated.CustomAnimation<
  TextStyle & ViewStyle & ImageStyle
> = {
  to: {
    zIndex: -1,
    opacity: 0,
    transform: [
      {
        translateY: 130,
      },
    ],
  },
  from: {
    zIndex: 2,
    opacity: 1,
    transform: [
      {
        translateY: 0,
      },
    ],
  },
};

const searchShowAnimation: Animated.CustomAnimation<
  TextStyle & ViewStyle & ImageStyle
> = {
  from: {
    transform: [
      {
        translateY: -150,
      },
    ],
  },
  to: {
    transform: [
      {
        translateY: 0,
      },
    ],
  },
};

const searchHideAnimation: Animated.CustomAnimation<
  TextStyle & ViewStyle & ImageStyle
> = {
  to: {
    transform: [
      {
        translateY: -150,
      },
    ],
  },
  from: {
    transform: [
      {
        translateY: 0,
      },
    ],
  },
};

const textShowAnimation: Animated.CustomAnimation<
  TextStyle & ViewStyle & ImageStyle
> = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

const textHideAnimation: Animated.CustomAnimation<
  TextStyle & ViewStyle & ImageStyle
> = {
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
};

const carouselShowAnimation: Animated.CustomAnimation<
  TextStyle & ViewStyle & ImageStyle
> = {
  from: {
    opacity: 0,
    transform: [
      {
        translateY: 30,
      },
    ],
  },
  to: {
    opacity: 1,
    transform: [
      {
        translateY: 0,
      },
    ],
  },
};

const carouselHideAnimation: Animated.CustomAnimation<
  TextStyle & ViewStyle & ImageStyle
> = {
  to: {
    opacity: 0,
    transform: [
      {
        translateY: 30,
      },
    ],
  },
  from: {
    opacity: 1,
    transform: [
      {
        translateY: 0,
      },
    ],
  },
};

type Props = {
  searchResultList: any[];
  isSearchActive: boolean;
  onSearchTextChanged: (txt: string) => void;
  onSearchTextFocused: () => void;
  onSearchTextBlur: () => void;
};

const FeedNoSubscribe = ({
  searchResultList,
  isSearchActive,
  onSearchTextChanged,
  onSearchTextFocused,
  onSearchTextBlur,
}: Props) => {
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <KeyboardAwareFlatList
        style={{
          flex: 1,
        }}
        bounces={false}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={['RO']}
        renderItem={() => {
          return (
            <View
              style={{
                flex: 1,
              }}>
              <StatusBar barStyle="light-content" />
              <View
                style={{
                  height: getStatusBarHeight(),
                }}
              />
              <Animated.View
                useNativeDriver
                animation={
                  isSearchActive ? searchHideAnimation : searchShowAnimation
                }
                duration={400}
                style={{
                  paddingTop: 48,
                  paddingHorizontal: 12,
                  position: 'relative',
                }}>
                <Animated.View
                  useNativeDriver
                  animation={
                    isSearchActive ? textHideAnimation : textShowAnimation
                  }
                  duration={200}>
                  <Text
                    style={[
                      Pretendard.SemiBold,
                      {
                        fontSize: 24,
                        color: 'rgba(255,255,255,0.95)',
                        textAlign: 'center',
                      },
                    ]}>
                    구독할 첫번째 채널을 찾아보세요
                  </Text>
                  <Text
                    style={[
                      Pretendard.Regular,
                      {
                        fontSize: 15,
                        color: 'rgba(255,255,255,0.55)',
                        textAlign: 'center',
                        marginTop: 8,
                        lineHeight: 15 * 1.5,
                      },
                    ]}>
                    지금부터 여러분에게 크리에이터들의 솔직하고{'\n'}본질적인
                    이야기를 들려드리려 합니다
                  </Text>
                </Animated.View>
                <View
                  style={{
                    height: 48,
                    backgroundColor: colors.fill40,
                    borderRadius: 50,
                    marginTop: 20,
                    paddingHorizontal: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                  }}>
                  <Image
                    source={images.icons.search.gray}
                    defaultSource={images.icons.search.gray}
                  />
                  <TextInput
                    onChangeText={onSearchTextChanged}
                    onFocus={onSearchTextFocused}
                    onBlur={onSearchTextBlur}
                    placeholder="채널 혹은 크리에이터를 검색해보세요"
                    placeholderTextColor={'rgba(255,255,255,0.5)'}
                    style={[
                      Pretendard.SemiBold,
                      {
                        fontSize: 17,
                        flex: 1,
                        color: colors.fill10,
                        height: '100%',
                      },
                    ]}
                  />
                </View>
              </Animated.View>
              {/* Carousel */}
              <Animated.View
                useNativeDriver
                animation={
                  isSearchActive ? carouselHideAnimation : carouselShowAnimation
                }
                duration={500}
                style={{
                  marginTop: 40,
                }}>
                <FlatList
                  automaticallyAdjustContentInsets={false}
                  contentContainerStyle={{
                    paddingHorizontal: offset - gap / 2,
                  }}
                  data={dummy}
                  decelerationRate="fast"
                  horizontal
                  keyExtractor={i => i.name}
                  onScroll={e => {
                    // console.log(e);
                  }}
                  pagingEnabled
                  renderItem={({item}) => {
                    return (
                      <View
                        style={{
                          width: width - 48,
                          aspectRatio: 345 / 428,
                          marginHorizontal: gap / 2,
                          borderRadius: 12,
                          overflow: 'hidden',
                        }}>
                        {/* background image */}
                        <View
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                          }}>
                          <FastImage
                            resizeMode="cover"
                            style={{
                              width: '100%',
                              height: '100%',
                            }}
                            source={{
                              uri: item.backgroundImage,
                            }}
                          />
                        </View>

                        {/* gradient view */}
                        <View
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                          }}>
                          <LinearGradient
                            style={{
                              width: '100%',
                              height: '100%',
                            }}
                            start={{
                              x: 0,
                              y: 1,
                            }}
                            end={{
                              x: 0,
                              y: 0,
                            }}
                            colors={['#000000', '#00000000']}
                          />
                        </View>
                        <View
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            zIndex: 4,
                            padding: 24,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Text
                              style={[
                                Pretendard.SemiBold,
                                {
                                  fontSize: 22,
                                  color: colors.fill10,
                                  marginRight: 4,
                                },
                              ]}>
                              {item.name}
                            </Text>
                            <Image source={images.icons.badge.white} />
                          </View>
                          <Text
                            style={[
                              Pretendard.Regular,
                              {
                                fontSize: 14,
                                color: 'rgba(255,255,255,0.5)',
                                lineHeight: 14 * 1.5,
                                marginTop: 4,
                              },
                            ]}>
                            {item.desc}
                          </Text>
                        </View>
                      </View>
                    );
                  }}
                  snapToInterval={width - 48 + gap}
                  snapToAlignment="start"
                  showsHorizontalScrollIndicator={false}
                />
              </Animated.View>
            </View>
          );
        }}
      />
      <Animated.View
        useNativeDriver
        duration={400}
        animation={
          isSearchActive ? searchListShowAnimation : searcListhHideAnimation
        }
        style={{
          position: 'absolute',
          zIndex: 2,
          top: getStatusBarHeight() + 56,
          left: 0,
          right: 0,
          bottom: 0,
          paddingTop: 8,
        }}>
        <FlatList
          style={{
            flex: 1,
          }}
          data={searchResultList}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 8,
              }}
            />
          )}
          renderItem={() => {
            return (
              <TouchableOpacity
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <FastImage
                  style={{
                    width: 36,
                    aspectRatio: 1 / 1,
                    borderRadius: 4,
                    marginRight: 12,
                  }}
                  source={{
                    uri: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAxMjFfOTUg/MDAxNTc5NTg5NDUxNzMx.eO0qQ_aVGjY-uVSt4MfW75AeiHyB6JTH2ul0dCdDb7gg.m8FBmcMTvO-bcPdzRGafqRsKFXKHRTHWrOZDBb9m2Xgg.JPEG.cncnahs136/0121_%EA%B3%A0%EC%9C%A4%EC%A0%95%EC%82%AC%EC%A7%84_(4).jpg?type=w800',
                  }}
                />
                <Text
                  style={[
                    Pretendard.SemiBold,
                    {
                      fontSize: 17,
                      color: 'white',
                      flex: 1,
                    },
                  ]}>
                  고윤정 younjung
                </Text>
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 4,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                  }}>
                  <Text
                    style={[
                      Pretendard.SemiBold,
                      {
                        fontSize: 14,
                        color: 'rgba(255,255,255,0.95)',
                      },
                    ]}>
                    구독하기
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
        />
      </Animated.View>
    </View>
  );
};

export default FeedNoSubscribe;
