import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import images from '@assets/images';
import {Pretendard} from '@assets/fonts';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import colors from '@assets/colors';
import {hasNotch} from 'react-native-device-info';

const CustomTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View
      style={{
        paddingHorizontal: 8,
        paddingTop: 2,
        paddingBottom: hasNotch() ? 34 : 18,
        backgroundColor: 'rgba(30,30,30,0.84)',
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
                  source={images.tabBar.home[isFocused ? 'active' : 'deactive']}
                />
              )}
              {label === '탐색' && (
                <Image
                  source={
                    images.tabBar.explore[isFocused ? 'active' : 'deactive']
                  }
                />
              )}
              {label === '마이페이지' && (
                <Image
                  source={
                    images.tabBar.profile[isFocused ? 'active' : 'deactive']
                  }
                />
              )}
              <Text
                style={[
                  Pretendard.Bold,
                  {
                    fontSize: 10,
                    color: isFocused ? 'white' : colors.GRAY200000,
                    marginTop: 6,
                    textAlign: 'center',
                  },
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;
