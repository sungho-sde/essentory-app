import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Poppins, Pretendard} from '@assets/fonts';
import {prevColors} from '@assets/colors';

type Props = {
  onCreatorPressed: () => void;
};

const MypageSubscribeFeedCard = ({onCreatorPressed}: Props) => {
  return (
    <TouchableOpacity
      onPress={onCreatorPressed}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
      }}>
      <FastImage
        style={{
          width: 56,
          aspectRatio: 1 / 1,
          borderRadius: 56,
          marginRight: 12,
        }}
        source={{
          uri: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        }}
      />
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={[
            Pretendard.Bold,
            {
              fontSize: 14,
              color: 'white',
            },
          ]}
          numberOfLines={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          aspernatur, non aliquam dolores adipisci placeat doloremque
          consectetur est, qui dolorum porro! Dolores placeat provident
          doloremque maiores? Iusto nulla reprehenderit ipsam.
        </Text>
        <Text
          style={[
            Poppins.Regular,
            {
              fontSize: 14,
              color: prevColors.GRAY300000,
              marginTop: 8,
            },
          ]}
          numberOfLines={1}>
          @sdllq_018
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 88,
          height: 36,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 36,
          backgroundColor: prevColors.MAIN,
        }}>
        <Text
          style={[
            Pretendard.Bold,
            {
              fontSize: 14,
              color: prevColors.BLACK200000,
            },
          ]}>
          후원하기
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MypageSubscribeFeedCard;
