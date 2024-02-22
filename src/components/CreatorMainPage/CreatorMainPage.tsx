import {View, Text, FlatList} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

type Props = {};

const CreatorMainPage = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        style={{
          flex: 1,
        }}
        data={['renderOnly']}
        renderItem={() => {
          return (
            <View>
              <FastImage
                style={{
                  width: '100%',
                  aspectRatio: 1 / 1,
                }}
                source={{
                  uri: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default CreatorMainPage;
