import {View, Text, StatusBar, Image, Platform} from 'react-native';
import React from 'react';
import {prevColors} from '@assets/colors';
import {Poppins} from '@assets/fonts';
import images from '@assets/images';

type Props = {};

const Splash = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: prevColors.BLACK300,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar
        barStyle={Platform.OS === 'android' ? 'light-content' : 'light-content'}
      />
      <Image source={images.logo.loginMain} />
    </View>
  );
};

export default Splash;
