import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {Pretendard} from '@assets/fonts';
import colors from '@assets/colors';
import FastImage from 'react-native-fast-image';

type Props = {};

const Alert = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        style={{
          flex: 1,
        }}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Text
                style={[
                  Pretendard.Regular,
                  {
                    fontSize: 14,
                    color: colors.GRAY100000,
                  },
                ]}>
                알림 항목이 없습니다.
              </Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 52,
          flexGrow: 1,
        }}
        data={[1]}
        renderItem={() => {
          return (
            <TouchableOpacity
              style={{
                paddingTop: 16,
                paddingHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: 8,
              }}>
              <View
                style={{
                  flex: 1,
                }}>
                <Text
                  numberOfLines={1}
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 16,
                      color: 'white',
                    },
                  ]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  asperiores officiis mollitia sequi? Distinctio, iusto ex
                  excepturi blanditiis magnam ipsa ea perspiciatis quo, soluta
                  quae assumenda, praesentium quia unde dolorem?
                </Text>
                <Text
                  numberOfLines={1}
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 12,
                      color: colors.GRAY100000,
                      marginTop: 12,
                    },
                  ]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  asperiores officiis mollitia sequi? Distinctio, iusto ex
                  excepturi blanditiis magnam ipsa ea perspiciatis quo, soluta
                  quae assumenda, praesentium quia unde dolorem?
                </Text>
                <Text
                  numberOfLines={1}
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 12,
                      color: colors.GRAY100000,
                      marginTop: 12,
                    },
                  ]}>
                  2023.06.16 수요일
                </Text>
                <View
                  style={{
                    height: 1,
                    backgroundColor: colors.BLACK000000,
                    marginTop: 16,
                  }}
                />
              </View>
              <FastImage
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                }}
                source={{
                  uri: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5030&q=80',
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Alert;
