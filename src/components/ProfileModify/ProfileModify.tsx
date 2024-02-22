import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Pretendard} from '@assets/fonts';
import colors from '@assets/colors';

type Props = {};

const ProfileModify = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          paddingVertical: 24,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <FastImage
          style={{
            width: 96,
            aspectRatio: 1 / 1,
            borderRadius: 12,
          }}
          source={{
            uri: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3648&q=80',
          }}
        />
        <TouchableOpacity
          style={{
            marginTop: 8,
          }}>
          <Text
            style={[
              Pretendard.Regular,
              {
                fontSize: 14,
                color: colors.MAIN,
              },
            ]}>
            프로필 사진 변경
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <View>
          <Text
            style={[
              Pretendard.Regular,
              {
                fontSize: 14,
                color: 'white',
              },
            ]}>
            이름
          </Text>
          <View
            style={{
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#1F1F1F',
              flexDirection: 'row',
              gap: 10,
              marginTop: 8,
              paddingVertical: 12,
              paddingHorizontal: 16,
              backgroundColor: '#0E0E0F',
            }}>
            <TextInput
              value="Day 14"
              placeholderTextColor={colors.GRAY400000}
              style={[
                Pretendard.Regular,
                {
                  fontSize: 16,
                  color: 'white',
                  height: 24,
                  flex: 1,
                },
              ]}
              placeholder="이름을 입력해주세요"
            />
            <TouchableOpacity
              style={{
                height: 24,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={[
                  Pretendard.Regular,
                  {
                    fontSize: 16,
                    color: '#4C4C4D',
                  },
                ]}>
                수정
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileModify;
