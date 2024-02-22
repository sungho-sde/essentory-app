import {View, Text} from 'react-native';
import React from 'react';
import RootNavigation from '../RootNavigation';
import useRootRouter from '@hooks/store/routes/useRootRouter';

type Props = {};

const RootNavigationContainer = (props: Props) => {
  const {rootRouter} = useRootRouter();

  return <RootNavigation rootRouter={rootRouter} />;
};

export default RootNavigationContainer;
