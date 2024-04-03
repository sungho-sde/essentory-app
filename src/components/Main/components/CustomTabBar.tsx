import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import images from '@assets/images';
import {Pretendard} from '@assets/fonts';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {prevColors} from '@assets/colors';
import {hasNotch} from 'react-native-device-info';
import FastImage from 'react-native-fast-image';

const CustomTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View
      style={{
        bottom: 32,
        left: 0,
        right: 0,
        position: 'absolute',
        paddingHorizontal: 12,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.6)',
          paddingVertical: 8,
          borderRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label: string =
              options.tabBarLabel !== undefined
                ? (options.tabBarLabel as string)
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                //@ts-ignore
                navigation.navigate({name: route.name, merge: true});
              }
            };

            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                onPress={onPress}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 56,
                }}>
                {label === '홈' && (
                  <Image
                    source={
                      images.tabBar.home[isFocused ? 'active' : 'deactive']
                    }
                  />
                )}
                {label === '콘텐츠' && (
                  <Image
                    source={
                      images.tabBar.content[isFocused ? 'active' : 'deactive']
                    }
                  />
                )}
                {label === '커뮤니티' && (
                  <Image
                    source={
                      images.tabBar.community[isFocused ? 'active' : 'deactive']
                    }
                  />
                )}
                {label === '알림' && (
                  <Image
                    source={
                      images.tabBar.alert[isFocused ? 'active' : 'deactive']
                    }
                  />
                )}
                {label === '마이페이지' && (
                  <FastImage
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 24,
                    }}
                    source={{
                      uri: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    }}
                  />
                )}
                {/* <Text
                style={[
                  Pretendard.Bold,
                  {
                    fontSize: 10,
                    color: isFocused ? 'white' : prevColors.GRAY200000,
                    marginTop: 6,
                    textAlign: 'center',
                  },
                ]}>
                {label}
              </Text> */}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default CustomTabBar;
