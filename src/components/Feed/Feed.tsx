import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FeedNoSubscribeContainer from './containers/FeedNoSubscribeContainer';
import FeedExistSubscribeContainer from './containers/FeedExistSubscribeContainer';

type Props = {};

const Feed = (props: Props) => {
  /**
   * To Do: Check if the user has subscribers or not
   */
  return (
    <View style={styles.container}>
      {false ? <FeedNoSubscribeContainer /> : <FeedExistSubscribeContainer />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919'
  }
})

export default Feed;
