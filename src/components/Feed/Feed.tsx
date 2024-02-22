import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Poppins, Pretendard} from '@assets/fonts';
import colors from '@assets/colors';
import images from '@assets/images';

type Props = {};

const Feed = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.BLACK001000,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
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
              color: '#767678',
              textAlign: 'center',
              lineHeight: 20,
              marginTop: 30,
            },
          ]}>
          지금부터 여러분에게 크리에이터들의 솔직하고{'\n'}
          본질적인 이야기를 들려주려고 합니다.
        </Text>
        <TouchableOpacity
          style={{
            paddingVertical: 16,
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: colors.MAIN,
            borderRadius: 100,
            alignSelf: 'center',
            marginTop: 30,
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
          }}>
          <Text
            style={[
              Poppins.SemiBold,
              {
                fontSize: 14,
                color: colors.MAIN,
              },
            ]}>
            Find your Creator
          </Text>
          <Image source={images.icons.arrow.right.main} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Feed;
