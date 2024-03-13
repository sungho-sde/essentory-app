import React from 'react';
import {View, Text} from 'react-native';
import Loading from '../Loading';
import useLoading from '@hooks/store/layouts/useLoading';

interface Props {}

const LoadingContainer = (props: Props) => {
  const {isLoading} = useLoading();
  console.log(isLoading);

  return <Loading isLoading={isLoading} />;
};

export default LoadingContainer;
