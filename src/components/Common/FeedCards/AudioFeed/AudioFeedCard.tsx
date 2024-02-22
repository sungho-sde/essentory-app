import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Poppins, Pretendard} from '@assets/fonts';
import colors from '@assets/colors';
import images from '@assets/images';
import * as Animated from 'react-native-animatable';

type Props = {};

const AudioFeedCard = (props: Props) => {
  return (
    <TouchableOpacity
      style={{
        minHeight: 268,
        borderRadius: 12,
        backgroundColor: '#f4f4f4',
        overflow: 'hidden',
        padding: 20,
      }}>
      <FastImage
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        source={{
          uri: 'https://images.unsplash.com/photo-1687173566424-751ee0f54c49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1254&q=80',
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: colors.BLACK100000,
          opacity: 0.4,
        }}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={[
            Pretendard.Regular,
            {
              fontSize: 14,
              color: 'white',
            },
          ]}>
          32:14
        </Text>
        {/* waveform */}
        <View
          style={{
            flex: 1,
          }}>
          <Animated.View
            useNativeDriver
            style={{
              width: 3,
              height: 18,
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            marginRight: 12,
          }}>
          <Image source={images.icons.pause.circle.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.icons.mute.circle.black} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginTop: 24,
        }}>
        {/* left side */}
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginRight: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FastImage
              style={{
                width: 24,
                height: 24,
                borderRadius: 24,
                marginRight: 8,
              }}
              source={{
                uri: 'https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
              }}
            />
            <Text
              numberOfLines={1}
              style={[
                Pretendard.SemiBold,
                {
                  fontSize: 14,
                  color: 'white',
                  flex: 1,
                },
              ]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, quasi. Sequi corrupti cum earum similique vel saepe
              dolore delectus explicabo qui enim. Perferendis maxime veniam
              impedit quibusdam, a voluptatibus unde!
            </Text>
          </View>
          <Text
            numberOfLines={3}
            style={[
              Pretendard.Regular,
              {
                fontSize: 14,
                color: 'white',
                marginTop: 12,
                lineHeight: 22,
              },
            ]}>
            Essentory를 통해 진정한 팬들과 소통한다. 더 이상 상업적인 이유로
            크리에이팅을 이어나가지 않아도 크리에이팅을 이어나가지
            않아도크리에이팅을 이어나가지 않아도
          </Text>
          <Text
            style={[
              Pretendard.Regular,
              {
                fontSize: 12,
                marginTop: 12,
                color: colors.GRAY100000,
              },
            ]}>
            2023.06.22
          </Text>
        </View>
        {/* right side */}
        <View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={images.icons.like.whiteStroke} />
            <Text
              style={[
                Poppins.Regular,
                {
                  fontSize: 12,
                  color: 'white',
                  marginTop: 2,
                },
              ]}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Image source={images.icons.chat.white} />
            <Text
              style={[
                Poppins.Regular,
                {
                  fontSize: 12,
                  color: 'white',
                  marginTop: 2,
                },
              ]}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Image source={images.icons.plane.white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Image source={images.icons.more.white} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AudioFeedCard;
