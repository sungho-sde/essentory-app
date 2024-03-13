import {View, Text} from 'react-native';
import React from 'react';
import CommonStackNavigationContainer from '@routes/CommonStackNavigation/containers/CommonStackNavigationContainer';
import {RootRouterTypes} from '@typedef/store/routes.types';
import SplashContainer from '@components/Splash/containers/SplashContainer';
import {NavigationContainer} from '@react-navigation/native';
import LoginStackNavigationContainer from '@routes/LoginStackNavigation/containers/LoginStackNavigationContainer';
import colors from '@assets/colors';
import LoadingContainer from '@components/Common/Loading/containers/LoadingContainer';

type Props = {
  rootRouter: RootRouterTypes;
};

const RootNavigation = ({rootRouter}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.BLACK300,
      }}>
      <NavigationContainer
      // ref={rootNavigationRef}
      // onReady={() => {
      //   setIsNavigationReady(true);
      // }}
      // onStateChange={onNavigationStateChanged}
      >
        {rootRouter === 'splash' && <SplashContainer />}
        {rootRouter === 'login' && <LoginStackNavigationContainer />}
        {rootRouter === 'main' && <CommonStackNavigationContainer />}
      </NavigationContainer>
      <LoadingContainer />
    </View>
  );
};

export default RootNavigation;
