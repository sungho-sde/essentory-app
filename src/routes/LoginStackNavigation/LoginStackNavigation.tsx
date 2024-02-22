import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginStackNavigationTypes,
  LoginStackParamsListTypes,
} from '@typedef/routes/login.stack.types';
import colors from '@assets/colors';
import {Pretendard} from '@assets/fonts';
import {useNavigation} from '@react-navigation/native';
import images from '@assets/images';
import LoginContainer from '@components/Login/containers/LoginContainer';
import ForgotPasswordContainer from '@components/ForgotPassword/containers/ForgotPasswordContainer';
import JoinStep1Container from '@components/JoinStep1/containers/JoinStep1Container';
import JoinStep2Container from '@components/JoinStep2/containers/JoinStep2Container';

type Props = {};

const Stack = createNativeStackNavigator<LoginStackParamsListTypes>();

const LoginStackNavigation = (props: Props) => {
  const navigation = useNavigation<LoginStackNavigationTypes>();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          contentStyle: {
            backgroundColor: '#090909',
          },
          headerStyle: {
            backgroundColor: '#090909',
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
          name="login"
          component={LoginContainer}
          options={{
            title: '',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="forgotPassword"
          component={ForgotPasswordContainer}
          options={{
            title: '비밀번호 찾기',
          }}
        />
        <Stack.Screen
          name="joinStep1"
          component={JoinStep1Container}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="joinStep2"
          component={JoinStep2Container}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default LoginStackNavigation;
