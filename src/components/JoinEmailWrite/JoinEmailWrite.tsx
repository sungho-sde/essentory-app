import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {Pretendard} from '@assets/fonts';
import TextInputComponentContainer from '@components/Common/Input/TextInputComponent/containers/TextInputComponentContainer';
import {colors} from '@assets/colors';

type Props = {
  isReadyForSubmit: boolean;
  onEmailTextChanged: (txt: string) => void;
  onSubmitPressed: () => void;
};

const JoinEmailWrite = ({
  isReadyForSubmit,
  onEmailTextChanged,
  onSubmitPressed,
}: Props) => {
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
                      color: colors.fill10,
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
                      placeholder="이메일 입력하기"
                      keyboardType="email-address"
                      onTextChanged={onEmailTextChanged}
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity
                disabled={!isReadyForSubmit}
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
                      color: true ? colors.fill10 : colors.fill40,
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
