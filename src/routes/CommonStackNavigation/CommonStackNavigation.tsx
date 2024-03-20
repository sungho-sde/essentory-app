import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CommonStackNavigationTypes,
  CommonStackParamsListTypes,
} from '@typedef/routes/common.stack.types';
import {useNavigation} from '@react-navigation/native';
import {Pretendard} from '@assets/fonts';
import images from '@assets/images';

import MainContainer from '@components/Main/containers/MainContainer';
import AlertContainer from '@components/Alert/containers/AlertContainer';
import colors from '@assets/colors';
import SettingContainer from '@components/Setting/containers/SettingContainer';
import CreatorMainPageContainer from '@components/CreatorMainPage/containers/CreatorMainPageContainer';
import ProfileModifyContainer from '@components/ProfileModify/containers/ProfileModifyContainer';
import Test from '@components/Test/Test';
import TestShareButtonContainer from '@components/Test/containers/TestShareButtonContainer';
import TestComponent from '@components/Test/components/TestComponent';

type Props = {};

const Stack = createNativeStackNavigator<CommonStackParamsListTypes>();

const CommonStackNavigation = (props: Props) => {
  const navigation = useNavigation<CommonStackNavigationTypes>();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Stack.Navigator
        initialRouteName="main"
        screenOptions={{
          contentStyle: {
            backgroundColor: 'rgba(0,0,0,0)',
          },
          headerStyle: {
            backgroundColor: colors.BLACK200000,
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: [
            Pretendard.Bold,
            {
              fontSize: 16,
              color: 'white',
            },
          ],
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={navigation.goBack}>
                <Image source={images.icons.back.white} />
              </TouchableOpacity>
            );
          },
        }}>
        <Stack.Screen
          name="main"
          component={MainContainer}
          options={{
            title: '',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="alert"
          component={AlertContainer}
          options={{
            title: '알림',
          }}
        />

        <Stack.Screen
          name="setting"
          component={SettingContainer}
          options={{
            title: '설정',
          }}
        />

        {/* MYPAGE SECTION */}

        <Stack.Group>
          <Stack.Screen
            name="modifyProfile"
            component={ProfileModifyContainer}
            options={{
              title: '프로필 편집',
            }}
          />
        </Stack.Group>

        {/* CREATOR SECTION */}

        <Stack.Group>
          <Stack.Screen
            name="creatorMainPage"
            component={CreatorMainPageContainer}
            options={{
              title: '',
            }}
          />
        </Stack.Group>

        {/* TEST SECTION */}
        <Stack.Group>
          <Stack.Screen
            name="test"
            component={Test}
            options={{
              title: '실험실',
            }}
          />
          <Stack.Screen
            name="testShareButton"
            component={TestShareButtonContainer}
            options={{
              title: '공유 버튼 테스트',
            }}
          />

          <Stack.Screen
            name="testComponent"
            component={TestComponent}
            options={{
              title: '컴포넌트 테스트',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </View>
  );
};

export default CommonStackNavigation;
