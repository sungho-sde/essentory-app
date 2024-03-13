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
import JoinPasswordContainer from '@components/JoinPassword/containers/JoinPasswordContainer';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import CheckEmailVerificationContainer from '@components/CheckEmailVerification/containers/CheckEmailVerificationContainer';
import JoinProfileWriteContainer from '@components/JoinProfileWrite/containers/JoinProfileWriteContainer';
import PasswordResetEmailCompleteContainer from '@components/PasswordResetEmailComplete/containers/PasswordResetEmailCompleteContainer';

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
            backgroundColor: '#191919',
          },
          header: props => (
            <View
              style={{
                height: getStatusBarHeight() + 48,
                flexDirection: 'row',
                alignItems: 'flex-end',
                backgroundColor: '#191919',
              }}>
              {/* header container */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {/* header Left */}
                <View
                  style={{
                    paddingLeft: 12,
                  }}>
                  <TouchableOpacity onPress={navigation.goBack}>
                    <Image source={images.icons.back.default} />
                  </TouchableOpacity>
                </View>
                {/* header title */}
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={[
                      Pretendard.Bold,
                      {
                        fontSize: 16,
                        color: 'white',
                      },
                    ]}>
                    {props.options.title}
                  </Text>
                </View>
                {/* header right */}
                <View
                  style={{
                    paddingRight: 12,
                  }}>
                  <View
                    style={{
                      width: 48,
                      height: 48,
                    }}></View>
                </View>
              </View>
            </View>
          ),
          headerShadowVisible: false,
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
            title: '',
          }}
        />
        <Stack.Screen
          name="joinPassword"
          component={JoinPasswordContainer}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="forgotPassword"
          component={ForgotPasswordContainer}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="passwordResetEmailComplete"
          component={PasswordResetEmailCompleteContainer}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="checkEmailVerification"
          component={CheckEmailVerificationContainer}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="joinProfileWrite"
          component={JoinProfileWriteContainer}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default LoginStackNavigation;
