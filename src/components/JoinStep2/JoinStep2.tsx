import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {Poppins, Pretendard} from '@assets/fonts';
import colors from '@assets/colors';
import {hasNotch} from 'react-native-device-info';
import images from '@assets/images';
import Modal from 'react-native-modal';
import useKeyboardHeight from '@hooks/useKeyboardHeight';

type Props = {
  validateTextinputRef: React.RefObject<TextInput>;
  isValidateModalOpen: boolean;
  onSendValidateNumberPressed: () => void;
  dismissValidateModal: () => void;
};

const JoinStep2 = ({
  validateTextinputRef,
  isValidateModalOpen,
  onSendValidateNumberPressed,
  dismissValidateModal,
}: Props) => {
  const {height} = useKeyboardHeight();
  return (
    <View
      style={{
        flex: 1,
      }}>
      <KeyboardAwareFlatList
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        data={['onlyRender']}
        renderItem={() => {
          return (
            <View
              style={{
                paddingTop: 16,
              }}>
              <Text
                style={[
                  Pretendard.Bold,
                  {
                    fontSize: 24,
                    color: 'white',
                    lineHeight: 32,
                  },
                ]}>
                로그인에 사용할{'\n'}
                정보를 입력해주세요
              </Text>

              {/* 이름 입력 section */}
              <View
                style={{
                  marginTop: 32,
                }}>
                <Text
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 14,
                      color: 'white',
                    },
                  ]}>
                  이름
                </Text>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  style={[
                    Pretendard.Regular,
                    {
                      borderRadius: 12,
                      height: 48,
                      padding: 16,
                      color: 'white',
                      borderWidth: 1,
                      borderColor: colors.BLACK000000,
                      fontSize: 16,
                      marginTop: 8,
                    },
                  ]}
                  placeholder="이름"
                  placeholderTextColor={colors.GRAY300000}
                />
              </View>
              {/* 생년월일 입력 section */}
              <View
                style={{
                  marginTop: 32,
                }}>
                <Text
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 14,
                      color: 'white',
                    },
                  ]}>
                  생년월일(YYYYMMDD)
                </Text>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  secureTextEntry
                  style={[
                    Pretendard.Regular,
                    {
                      borderRadius: 12,
                      height: 48,
                      padding: 16,
                      color: 'white',
                      borderWidth: 1,
                      borderColor: colors.BLACK000000,
                      fontSize: 16,
                      marginTop: 8,
                    },
                  ]}
                  placeholder="생년월일(YYYYMMDD)"
                  placeholderTextColor={colors.GRAY300000}
                />
                {/* <Text
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 12,
                      color: colors.ERROR_RED,
                      marginTop: 8,
                    },
                  ]}>
                  영문/숫자/특수문자 조합 6-12자 특수문자 사용 가능해요
                </Text> */}
              </View>
              {/* 휴대폰 번호 입력 섹션 */}
              <View
                style={{
                  marginTop: 32,
                }}>
                <Text
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 14,
                      color: 'white',
                    },
                  ]}>
                  휴대폰번호
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 8,
                    marginTop: 8,
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: 20,
                      flexShrink: 0,
                      borderWidth: 1,
                      borderColor: colors.BLACK000000,
                      borderRadius: 12,
                      height: 48,
                    }}>
                    <Text
                      style={[
                        Poppins.Regular,
                        {
                          fontSize: 16,
                          color: 'white',
                          width: 54,
                        },
                      ]}>
                      SKT
                    </Text>
                    <Image source={images.icons.arrow.bottom.white} />
                  </TouchableOpacity>
                  <TextInput
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect={false}
                    secureTextEntry
                    style={[
                      Pretendard.Regular,
                      {
                        borderRadius: 12,
                        height: 48,
                        padding: 16,
                        color: 'white',
                        borderWidth: 1,
                        borderColor: colors.BLACK000000,
                        fontSize: 16,

                        flex: 1,
                      },
                    ]}
                    placeholder="휴대폰번호 입력"
                    placeholderTextColor={colors.GRAY300000}
                  />
                </View>
                {/* <Text
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 12,
                      color: colors.ERROR_RED,
                      marginTop: 8,
                    },
                  ]}>
                  영문/숫자/특수문자 조합 6-12자 특수문자 사용 가능해요
                </Text> */}
                <TouchableOpacity
                  onPress={onSendValidateNumberPressed}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 12,
                    marginTop: 16,
                    borderWidth: 1,
                    borderColor: colors.MAIN,
                    height: 48,
                  }}>
                  <Text
                    style={[
                      Pretendard.Regular,
                      {
                        fontSize: 14,
                        color: colors.MAIN,
                      },
                    ]}>
                    인증번호 발송
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: hasNotch() ? 52 : 18,
        }}>
        <TouchableOpacity
          // onPress={onNextPressed}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 56,
            borderRadius: 16,
            backgroundColor: colors.BLACK000000,
          }}>
          <Text
            style={[
              Pretendard.Bold,
              {
                fontSize: 16,
                color: colors.GRAY300000,
              },
            ]}>
            회원가입
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isValidateModalOpen}
        onBackdropPress={dismissValidateModal}
        style={{
          padding: 0,
          margin: 0,
          justifyContent: 'flex-end',
        }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              width: '100%',
              height: 460,
              backgroundColor: colors.BLACK300,
              paddingTop: 8,
            }}>
            <View
              style={{
                alignSelf: 'center',
                height: 4,
                borderRadius: 4,
                backgroundColor: 'white',
                opacity: 0.7,
                width: 35,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 8,
                height: 56,
                paddingHorizontal: 24,
              }}>
              <TouchableOpacity
                disabled
                style={{
                  opacity: 0,
                }}>
                <Image source={images.icons.cancel.white} />
              </TouchableOpacity>
              <Text
                style={[
                  Pretendard.Bold,
                  {
                    fontSize: 16,
                    color: 'white',
                    textAlign: 'center',
                    flex: 1,
                  },
                ]}>
                인증번호 입력
              </Text>
              <TouchableOpacity>
                <Image source={images.icons.cancel.white} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 24,
                paddingHorizontal: 20,
                gap: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 16,
                  height: 48,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: colors.BLACK000000,
                  flex: 1,
                }}>
                <TextInput
                  ref={validateTextinputRef}
                  placeholder="인증번호"
                  placeholderTextColor={colors.GRAY300000}
                  keyboardType="number-pad"
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 16,
                      color: 'white',
                      flex: 1,
                    },
                  ]}
                />
                <Text
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 16,
                      color: colors.GRAY300000,
                    },
                  ]}>
                  03:00
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  borderRadius: 12,
                  backgroundColor: colors.BLACK000000,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 76,
                  height: 48,
                }}>
                <Text
                  style={[
                    Pretendard.Regular,
                    {
                      fontSize: 14,
                      color: 'white',
                    },
                  ]}>
                  재요청
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default JoinStep2;
