import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import images from '@assets/images';
import {Pretendard} from '@assets/fonts';
import FastImage from 'react-native-fast-image';
import {colors} from '@assets/colors';

type Props = {
    onPostPressed: () => void;
};

const FeedPost = (props: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 12,
        gap: 8,
      }}>
      <FastImage
        source={{
          uri: 'https://cphoto.asiae.co.kr/listimglink/1/2022020714593034491_1644213570.jpg',
        }}
        style={{
          backgroundColor: 'red',
          width: 36,
          height: 36,
          borderRadius: 36,
        }}
      />
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 2,
              }}>
              <Text
                style={[
                  Pretendard.SemiBold,
                  {
                    fontSize: 15,
                    color: colors.fill10,
                  },
                ]}>
                고윤정
              </Text>
              <Text
                style={[
                  Pretendard.SemiBold,
                  {
                    fontSize: 15,
                    color: colors.fill10,
                  },
                ]}>
                @goyoonjung
              </Text>
            </View>
            <Image source={images.icons.badge.white16} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
            }}>
            <Text
              style={[
                Pretendard.Regular,
                {
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.55)',
                },
              ]}>
              24m
            </Text>
            <TouchableOpacity
              style={{
                width: 24,
                height: 24,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={images.icons.more.white16} />
            </TouchableOpacity>
          </View>
        </View>
              <Pressable style={styles.button} onPress={props.onPostPressed}>
          <View
            style={{
              marginTop: 4,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 16,
              borderTopLeftRadius: 0,
              backgroundColor: 'rgba(255,255,255,0.2)',
            }}>
            <Text
              style={[
                Pretendard.Regular,
                {
                  fontSize: 15,
                  color: 'white',
                  lineHeight: 15 * 1.5,
                },
              ]}>
              새해 복 많이 받으세요{'\n'}더 건강하길!🍀
            </Text>
            <FastImage
              style={{
                height: 376,
                width: '100%',
                marginTop: 12,
                borderRadius: 8,
              }}
              source={{
                uri: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAxMjFfOTUg/MDAxNTc5NTg5NDUxNzMx.eO0qQ_aVGjY-uVSt4MfW75AeiHyB6JTH2ul0dCdDb7gg.m8FBmcMTvO-bcPdzRGafqRsKFXKHRTHWrOZDBb9m2Xgg.JPEG.cncnahs136/0121_%EA%B3%A0%EC%9C%A4%EC%A0%95%EC%82%AC%EC%A7%84_(4).jpg?type=w800',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                  }}>
                  <View style={styles.icon}>
                    <Image source={images.icons.heart.white16} />
                  </View>

                  <Text style={[Pretendard.Regular, styles.font]}>1.2k</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                  }}>
                  <View style={styles.icon}>
                    <Image source={images.icons.comment.white16} />
                  </View>

                  <Text style={[Pretendard.Regular, styles.font]}>1.2k</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.icon}>
                <Image source={images.icons.bookmark.white16} />
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </View>
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
    },
    button: {
      flex: 1
  }
});

export default FeedPost;
