import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Home from '../Home';
import {useNavigation} from '@react-navigation/native';
import {CommonStackNavigationTypes} from '@typedef/routes/common.stack.types';
import images from '@assets/images';
import {HomeFilterTypes} from '@typedef/components/home.types';

type Props = {};

const HomeContainer = (props: Props) => {
  const navigation = useNavigation<CommonStackNavigationTypes>();

  const onTestPressed = useCallback(() => {
    navigation.navigate('test');
  }, []);

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  // 현재 선택중인 필터
  const [currentFilterInModal, setCurrentFilterInModal] =
    useState<HomeFilterTypes>('all');

  // 최종 선택된 필터
  const [currentFilter, setCurrentFilter] = useState<HomeFilterTypes>('all');

  const onFilterPressed = useCallback(() => {
    setIsFilterModalOpen(true);
  }, []);

  const onFilterInModalPressed = useCallback((filter: HomeFilterTypes) => {
    setCurrentFilterInModal(filter);
  }, []);

  const dismissFilterModal = useCallback(() => {
    //UX timeout
    setTimeout(() => {
      setCurrentFilterInModal(currentFilter);
    }, 300);
    setIsFilterModalOpen(false);
  }, [currentFilter]);

  const onFilterSubmitPressed = useCallback((filter: HomeFilterTypes) => {
    setCurrentFilter(filter);
    setCurrentFilterInModal(filter);
    setIsFilterModalOpen(false);
  }, []);

  const onAlertPressed = useCallback(() => {
    navigation.navigate('alert');
  }, []);

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     headerLeft: () => {
  //       return (
  //         <TouchableOpacity
  //           disabled={!__DEV__}
  //           onPress={onTestPressed}
  //           style={{
  //             paddingLeft: 20,
  //           }}>
  //           <Image source={images.logo.letter} />
  //         </TouchableOpacity>
  //       );
  //     },
  //     headerRight: () => {
  //       return (
  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             gap: 16,
  //             paddingRight: 20,
  //           }}>
  //           <TouchableOpacity onPress={onFilterPressed}>
  //             <Image source={images.icons.filter.gray} />
  //           </TouchableOpacity>
  //           <TouchableOpacity onPress={onAlertPressed}>
  //             <Image source={images.icons.alert.gray} />
  //           </TouchableOpacity>
  //         </View>
  //       );
  //     },
  //   });

  //   return () => {};
  // }, [onAlertPressed, onFilterPressed, onTestPressed]);

  return (
    <Home
      currentFilterInModal={currentFilterInModal}
      isFilterModalOpen={isFilterModalOpen}
      dismissFilterModal={dismissFilterModal}
      onFilterInModalPressed={onFilterInModalPressed}
      onFilterSubmitPressed={onFilterSubmitPressed}
    />
  );
};

export default HomeContainer;
