import React from 'react';
import {View, Text, Platform, useWindowDimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import LottieData from '@lotties/loading.json';

import * as Animated from 'react-native-animatable';

interface Props {
  isLoading: boolean;
}

const Loading = ({isLoading}: Props) => {
  const {width} = useWindowDimensions();
  return (
    <Animated.View
      useNativeDriver
      transition={['opacity', 'zIndex']}
      duration={200}
      easing="ease-in-out"
      style={[
        {
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isLoading ? 1 : 0,
        },
        Platform.OS === 'android'
          ? {
              display: isLoading ? 'flex' : 'none',
            }
          : {
              zIndex: isLoading ? 9999 : -1,
            },
      ]}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: 'black',
          opacity: 0.7,
        }}
      />
      <LottieView
        style={{
          width: width * 0.3,
          height: width * 0.3,
        }}
        speed={1.5}
        source={LottieData}
        autoPlay
        loop
      />
    </Animated.View>
  );
};

export default Loading;
