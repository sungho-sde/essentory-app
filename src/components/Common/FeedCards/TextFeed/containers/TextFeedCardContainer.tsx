import {View, Text} from 'react-native';
import React, {useCallback, useState} from 'react';
import TextFeedCard from '../TextFeedCard';
import Share from 'react-native-share';

type Props = {};

const TextFeedCardContainer = (props: Props) => {
  // const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // const onSharePressed = useCallback(() => {
  //   setIsShareModalOpen(true);
  // }, []);

  // const dismissShareModal = useCallback(() => {
  //   setIsShareModalOpen(false);
  // }, []);

  const onSharePressed = useCallback(async () => {
    try {
      await Share.open({
        message: '오늘의 크리에이터를 확인해보세요!\nhttps://naver.com',
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <TextFeedCard onSharePressed={onSharePressed} />;
};

export default TextFeedCardContainer;
