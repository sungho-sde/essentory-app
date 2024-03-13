import {View, Text} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Splash from '../Splash';
import useRootRouter from '@hooks/store/routes/useRootRouter';
import auth from '@react-native-firebase/auth';
import {API, originUrl, requestPost} from '@lib/request';
import {AuthTypes} from '@typedef/store/auth.types';
import useAuth from '@hooks/store/auth/useAuth';
import {getErrorMessage} from '@lib/factory';
import useLoading from '@hooks/store/layouts/useLoading';

const Fauth = auth();

type Props = {};

const SplashContainer = (props: Props) => {
  const {__updateAuthFromHooks} = useAuth();
  const {__updateRootRouterFromHooks} = useRootRouter();
  const {__updateLoadingFromHooks} = useLoading();

  const getUserData = useCallback(async (uid: string) => {
    try {
      const responseFromServer = await requestPost<
        {uid: string; device_id: string; push_token: string},
        {
          user: AuthTypes;
        }
      >(originUrl + API.auth.signin, {
        uid,
        device_id: '',
        push_token: '',
      });
      __updateLoadingFromHooks(false);
      const {user} = responseFromServer;

      __updateAuthFromHooks(user);

      __updateRootRouterFromHooks('main');
    } catch (error) {
      // Default Error handling
      __updateLoadingFromHooks(false);
      Fauth.signOut();
      __updateRootRouterFromHooks('login');

      const message = getErrorMessage(error);
      console.log(message);

      if (message === 'User does not exist') {
        return;
      }
      if (message === 'Invalid Firebase UID') {
        return; // do something..
      }

      if (message === 'Specific Error Message') {
        return; // do something..
      }

      return; // do something..
    }
  }, []);

  const checkSession = useCallback(() => {
    Fauth.onAuthStateChanged(user => {
      console.log('onAuthStateChanged');
      if (!user) {
        console.log('no user');
        __updateAuthFromHooks({
          uid: '',
          displayName: '',
          id: '',
          profileImage: null,
          status: 'Deactive',
          email: '',
          createdAt: new Date(),
        });
        __updateRootRouterFromHooks('login');
        return;
      }
      console.log(user.uid + ' 정보확인');
      getUserData(user.uid);
    });
  }, [getUserData]);

  useEffect(() => {
    checkSession();
    return () => {};
  }, [checkSession]);

  return <Splash />;
};

export default SplashContainer;
