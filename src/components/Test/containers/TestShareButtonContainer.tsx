import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import TestShareButton from '../components/TestShareButton';
import Share from 'react-native-share';

type Props = {};

const TestShareButtonContainer = (props: Props) => {
  const onSharePressed = useCallback(async () => {
    try {
      await Share.open({
        url: 'https://naver.com',
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <TestShareButton onSharePressed={onSharePressed} />;
};

export default TestShareButtonContainer;
