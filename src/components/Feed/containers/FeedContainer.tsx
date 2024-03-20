import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Feed from '../Feed';
import {CommonStackNavigationTypes} from '@typedef/routes/common.stack.types';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const FeedContainer = (props: Props) => {
  const navigation = useNavigation<CommonStackNavigationTypes>();

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchResultList, setSearchResultList] = useState<any[]>([]);

  const onSearchTextChanged = useCallback((txt: string) => {
    setSearchText(txt);
  }, []);

  const onSearchTextFocused = useCallback(() => {
    setIsSearchActive(true);
  }, []);

  const onSearchTextBlur = useCallback(() => {
    if (searchText.length === 0) {
      setSearchResultList([]);
      setIsSearchActive(false);
      return;
    }

    setSearchResultList([1, 2]);
  }, [searchText]);

  const onTestPressed = useCallback(() => {
    navigation.navigate('test');
  }, []);

  return (
    <Feed
      searchResultList={searchResultList}
      isSearchActive={isSearchActive}
      onSearchTextChanged={onSearchTextChanged}
      onSearchTextFocused={onSearchTextFocused}
      onSearchTextBlur={onSearchTextBlur}
    />
  );
};

export default FeedContainer;
