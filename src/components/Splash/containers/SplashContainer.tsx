import {View, Text} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Splash from '../Splash';
import useRootRouter from '@hooks/store/routes/useRootRouter';

type Props = {};

const SplashContainer = (props: Props) => {
  const {__updateRootRouterFromHooks} = useRootRouter();

  const updateRootRouter = useCallback(() => {
    setTimeout(() => {
      __updateRootRouterFromHooks('main');
    }, 1000);
  }, []);

  useEffect(() => {
    updateRootRouter();
    return () => {};
  }, [updateRootRouter]);

  return <Splash />;
};

export default SplashContainer;
