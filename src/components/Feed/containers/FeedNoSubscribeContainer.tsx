import {View, Text} from 'react-native';
import React, {useCallback, useState} from 'react';
import FeedNoSubscribe from '../components/FeedNoSubscribe';
import {CommonStackNavigationTypes} from '@typedef/routes/common.stack.types';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const FeedNoSubscribeContainer = (props: Props) => {
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

  return (
    <FeedNoSubscribe
      searchResultList={searchResultList}
      isSearchActive={isSearchActive}
      onSearchTextChanged={onSearchTextChanged}
      onSearchTextFocused={onSearchTextFocused}
      onSearchTextBlur={onSearchTextBlur}
    />
  );
};

export default FeedNoSubscribeContainer;
