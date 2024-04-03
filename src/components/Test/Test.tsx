import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useCallback} from 'react';
import {Pretendard} from '@assets/fonts';
import {prevColors} from '@assets/colors';
import {useNavigation} from '@react-navigation/native';
import {TestStackNavigationTypes} from '@typedef/routes/test.stack.types';

type Props = {};

const Test = (props: Props) => {
  const navigation = useNavigation<TestStackNavigationTypes>();

  const onShareButtonPressed = useCallback(() => {
    navigation.navigate('testShareButton');
  }, []);

  const onTestComponentButtonPressed = useCallback(() => {
    navigation.navigate('testComponent');
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 40,
        }}>
        <TouchableOpacity
          onPress={onShareButtonPressed}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 52,
            backgroundColor: prevColors.MAIN,
            borderRadius: 8,
          }}>
          <Text
            style={[
              Pretendard.Bold,
              {
                fontSize: 16,
                color: prevColors.BLACK200000,
              },
            ]}>
            공유 버튼 테스트
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onTestComponentButtonPressed}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 52,
            backgroundColor: prevColors.MAIN,
            borderRadius: 8,
            marginTop: 20,
          }}>
          <Text
            style={[
              Pretendard.Bold,
              {
                fontSize: 16,
                color: prevColors.BLACK200000,
              },
            ]}>
            컴포넌트 테스트
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Test;
