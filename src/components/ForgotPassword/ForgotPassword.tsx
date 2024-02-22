import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import images from '@assets/images';
import {Pretendard} from '@assets/fonts';
import colors from '@assets/colors';

type Props = {};

const ForgotPassword = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          paddingVertical: 80,
        }}>
        <Image
          style={{
            alignSelf: 'center',
          }}
          source={images.icons.lock.white}
        />
        <Text
          style={[
            Pretendard.Regular,
            {
              fontSize: 14,
              color: 'white',
              textAlign: 'center',
              marginTop: 18,
            },
          ]}>
          본인확인을 위해 가입 시 등록한 전화번호로{'\n'}인증코드가 발송됩니다.
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
            }}>
            <Text
              style={[
                Pretendard.Bold,
                {
                  fontSize: 14,
                  color: 'white',
                  textAlign: 'center',
                },
              ]}>
              아이디로 찾기
            </Text>
            <View style={{marginTop: 6, height: 2, backgroundColor: 'white'}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
            }}>
            <Text
              style={[
                Pretendard.Bold,
                {
                  fontSize: 14,
                  color: colors.GRAY300000,
                  textAlign: 'center',
                },
              ]}>
              전화번호로 찾기
            </Text>
            <View
              style={{
                marginTop: 6,
                height: 2,
                backgroundColor: colors.GRAY300000,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: 22,
          }}>
          <TextInput
            placeholder="아이디를 입력해주세요."
            placeholderTextColor={colors.GRAY300000}
            style={[
              Pretendard.Regular,
              {
                fontSize: 16,
                color: 'white',
                borderRadius: 12,
                borderWidth: 1,
                borderColor: colors.BLACK000000,
                height: 48,
                paddingHorizontal: 16,
              },
            ]}
          />
          <TouchableOpacity
            style={{
              borderRadius: 12,
              backgroundColor: colors.MAIN,
              height: 56,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 22,
            }}>
            <Text
              style={[
                Pretendard.Bold,
                {
                  fontSize: 16,
                  color: colors.BLACK300,
                },
              ]}>
              다음
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
