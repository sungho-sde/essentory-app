import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Feed from '../Feed';
import {CommonStackNavigationTypes} from '@typedef/routes/common.stack.types';
import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationTypes} from '@typedef/routes/main.tab.types';
import images from '@assets/images';
import FastImage from 'react-native-fast-image';
import auth from '@react-native-firebase/auth';

type Props = {};

const FeedContainer = (props: Props) => {
  const navigation = useNavigation<CommonStackNavigationTypes>();
  const tabNavigation = useNavigation<BottomTabNavigationTypes>();

  const onTestPressed = useCallback(() => {
    navigation.navigate('test');
  }, []);

  const onAlertPressed = useCallback(() => {
    navigation.navigate('alert');
  }, []);

  useEffect(() => {
    tabNavigation.setOptions({
      headerShown: true,
      headerLeft: () => {
        return (
          <TouchableOpacity
            disabled={!__DEV__}
            onPress={onTestPressed}
            onLongPress={() => {
              auth().signOut();
            }}
            style={{
              paddingLeft: 20,
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: 82,
              }}
              source={images.logo.loginMain}
            />
          </TouchableOpacity>
        );
      },
      headerRight: () => {
        return (
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
              paddingRight: 20,
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <FastImage
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                }}
                source={{
                  uri: 'https://images.unsplash.com/photo-1697162735193-13521492a672?auto=format&fit=crop&q=80&w=4374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onAlertPressed}>
              <Image source={images.icons.alert.gray} />
            </TouchableOpacity>
          </View>
        );
      },
    });

    return () => {};
  }, [onTestPressed, onAlertPressed]);

  return <Feed />;
};

export default FeedContainer;
