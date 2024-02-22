import {View, Text} from 'react-native';
import React from 'react';
import TextInputComponentContainer from '@components/Common/Input/TextInputComponent/containers/TextInputComponentContainer';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';

type Props = {};

const TestComponent = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#333333',
      }}>
      <KeyboardAwareFlatList
        data={['renderOnly']}
        bounces={false}
        contentContainerStyle={{
          paddingTop: 200,
        }}
        renderItem={() => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <TextInputComponentContainer />
            </View>
          );
        }}
      />
    </View>
  );
};

export default TestComponent;
