import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {Pretendard} from '@assets/fonts';
import TextInputComponentContainer from '@components/Common/Input/TextInputComponent/containers/TextInputComponentContainer';

type Props = {
  onSubmitPressed: () => void;
};

const JoinEmailWrite = ({onSubmitPressed}: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <KeyboardAwareFlatList
        bounces={false}
        style={{
          flex: 1,
        }}
        data={['renderOnly']}
        renderItem={() => {
          return (
            <View
              style={{
                paddingTop: 8,
                paddingHorizontal: 24,
              }}>
              <View>
                <Text
                  style={[
                    Pretendard.SemiBold,
                    {
                      fontSize: 24,
                      color: 'rgba(255,255,255,0.85)',
                    },
                  ]}>
                  이메일을 입력해주세요
                </Text>
                <View
                  style={{
                    marginTop: 24,
                  }}>
                  <Text
                    style={[
                      Pretendard.SemiBold,
                      {
                        fontSize: 15,
                        color: 'white',
                      },
                    ]}>
                    이메일
                  </Text>
                  <View
                    style={{
                      marginTop: 8,
                    }}>
                    <TextInputComponentContainer
                      keyboardType="email-address"
                      onTextChanged={() => {}}
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={onSubmitPressed}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 50,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  marginTop: 24,
                  borderRadius: 4,
                }}>
                <Text
                  style={[
                    Pretendard.SemiBold,
                    {
                      fontSize: 17,
                      color: true
                        ? 'rgba(255,255,255,0.85)'
                        : 'rgba(255,255,255,0.15)',
                    },
                  ]}>
                  다음
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default JoinEmailWrite;
