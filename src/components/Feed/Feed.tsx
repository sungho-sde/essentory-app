import {View, Text} from 'react-native';
import React from 'react';
import FeedNoSubscribeContainer from './containers/FeedNoSubscribeContainer';
import FeedExistSubscribeContainer from './containers/FeedExistSubscribeContainer';

type Props = {};

const Feed = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#191919',
      }}>
      {false ? <FeedNoSubscribeContainer /> : <FeedExistSubscribeContainer />}
    </View>
  );
};

export default Feed;
