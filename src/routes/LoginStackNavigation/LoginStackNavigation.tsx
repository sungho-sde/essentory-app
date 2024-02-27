import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginStackNavigationTypes,
  LoginStackParamsListTypes,
} from '@typedef/routes/login.stack.types';
import {Pretendard} from '@assets/fonts';
import {useNavigation} from '@react-navigation/native';
import images from '@assets/images';
import LoginContainer from '@components/Login/containers/LoginContainer';
import ForgotPasswordContainer from '@components/ForgotPassword/containers/ForgotPasswordContainer';
import JoinEmailWriteContainer from '@components/JoinEmailWrite/containers/JoinEmailWriteContainer';

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
            backgroundColor: 'rgba(0,0,0,0.2)',
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
          name="joinEmailWrite"
          component={JoinEmailWriteContainer}
          options={{
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
      </Stack.Navigator>
    </View>
  );
};

export default LoginStackNavigation;
