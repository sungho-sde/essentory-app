import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import ProfileModify from '../ProfileModify';
import {useNavigation} from '@react-navigation/native';
import {CommonStackNavigationTypes} from '@typedef/routes/common.stack.types';
import colors from '@assets/colors';
import {Pretendard} from '@assets/fonts';

type Props = {};

const ProfileModifyContainer = (props: Props) => {
  const navigation = useNavigation<CommonStackNavigationTypes>();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View>
            <TouchableOpacity>
              <Text
                style={[
                  Pretendard.Regular,
                  {
                    color: colors.MAIN,
                    fontSize: 16,
                  },
                ]}>
                완료
              </Text>
            </TouchableOpacity>
          </View>
        );
      },
    });

    return () => {};
  }, []);

  return <ProfileModify />;
};

export default ProfileModifyContainer;
