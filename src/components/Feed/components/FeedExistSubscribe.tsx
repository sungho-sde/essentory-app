import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet
} from 'react-native';
import React, { useCallback } from 'react';
import images from '@assets/images';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Pretendard} from '@assets/fonts';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '@assets/colors';
import FeedPost from './FeedPost';
import { useNavigation } from '@react-navigation/native';
import { CommonStackNavigationTypes } from '@typedef/routes/common.stack.types';

type Props = {};

const FeedExistSubscribe = (props: Props) => {
  const navigation = useNavigation<CommonStackNavigationTypes>();
  
  const onPostPressed = useCallback(() => {
    navigation.navigate('feedPostDetailView');
  }, []);
  
  return (
    <View
      style={{
        flex: 1,
        paddingTop: getStatusBarHeight(),
      }}>
      <StatusBar barStyle="light-content" />
      <FlatList
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingBottom: 126,
        }}
        showsVerticalScrollIndicator={false}
        data={['searchBar', 'feeds']}
        stickyHeaderHiddenOnScroll
        stickyHeaderIndices={[0]}
        renderItem={({item}) => {
          if (item === 'searchBar') {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                  paddingHorizontal: 12,
                }}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    borderRadius: 48,
                    height: 48,
                    paddingVertical: 4,
                    paddingLeft: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 4,
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 62,
                      height: 40,
                      borderRadius: 40,
                      backgroundColor: colors.fill40,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={[
                        Pretendard.SemiBold,
                        {
                          fontSize: 17,
                          color: 'white',
                        },
                      ]}>
                      전체
                    </Text>
                  </TouchableOpacity>
                  <FlatList
                    horizontal
                    data={[
                      {
                        image:
                          'https://mblogthumb-phinf.pstatic.net/MjAyMDAxMjFfOTUg/MDAxNTc5NTg5NDUxNzMx.eO0qQ_aVGjY-uVSt4MfW75AeiHyB6JTH2ul0dCdDb7gg.m8FBmcMTvO-bcPdzRGafqRsKFXKHRTHWrOZDBb9m2Xgg.JPEG.cncnahs136/0121_%EA%B3%A0%EC%9C%A4%EC%A0%95%EC%82%AC%EC%A7%84_(4).jpg?type=w800',
                        name: '윤정 younjung',
                        id: '1',
                      },
                      {
                        image:
                          'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        name: '조승연의 탐구생활',
                        id: '2',
                      },
                      {
                        image:
                          'https://cphoto.asiae.co.kr/listimglink/1/2022020714593034491_1644213570.jpg',
                        name: '태연 Taeyeon',
                        id: '3',
                      },
                    ]}
                    ItemSeparatorComponent={() => (
                      <View
                        style={{
                          width: 4,
                        }}
                      />
                    )}
                    renderItem={({item}) => {
                      return (
                        <TouchableOpacity
                          style={{
                            paddingHorizontal: 4,
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 8,
                          }}>
                          <FastImage
                            style={{
                              width: 20,
                              height: 20,
                              borderRadius: 2,
                            }}
                            source={{
                              uri: item.image,
                            }}
                          />
                          <Text
                            style={[
                              Pretendard.SemiBold,
                              {
                                fontSize: 17,
                                color: 'white',
                              },
                            ]}>
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      right: 0,
                      bottom: 0,
                      top: 0,
                      width: 82,
                    }}>
                    <LinearGradient
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 48,
                      }}
                      start={{
                        x: 1,
                        y: 0,
                      }}
                      end={{
                        x: 0,
                        y: 0,
                      }}
                      colors={['#000000', '#00000000']}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    borderRadius: 48,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={images.icons.search.white} />
                </TouchableOpacity>
              </View>
            );
          }

          return (
            <FlatList
              style={{
                flex: 1,
              }}
              data={[1]}
              renderItem={() => {
                return (
                  <FeedPost onPostPressed={onPostPressed}/>
                );
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 15,
    color: 'white',
  }
})

export default FeedExistSubscribe;
