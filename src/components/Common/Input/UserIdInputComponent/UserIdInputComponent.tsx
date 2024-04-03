import {View, TextInput, Image, ViewStyle, ImageStyle} from 'react-native';
import React from 'react';
import images from '@assets/images';
import {Pretendard} from '@assets/fonts';
import * as Animated from 'react-native-animatable';
import {CustomUserIdInputComponentContainerPropsTypes} from './containers/UserIdInputComponentContainer';
import {colors} from '@assets/colors';

// Container에서 Present로 주는 타입
export type CustomTextInputComponentPresenterPropsTypes = {
  inputRef: React.RefObject<TextInput>;
  isFocused: boolean;
  isDuplicate?: boolean;
  onTextChanged: (txt: string) => void;
  onFocus: () => void;
  onBlur: () => void;
} & CustomUserIdInputComponentContainerPropsTypes;

type Props = CustomTextInputComponentPresenterPropsTypes;

const iconAnimation: Animated.CustomAnimation<ViewStyle & ImageStyle> = {
  from: {
    opacity: 0,
    transform: [
      {
        translateY: 10,
      },
    ],
  },
  to: {
    opacity: 1,
    transform: [
      {
        translateY: 0,
      },
    ],
  },
};

const UserIdInputComponent = ({
  inputRef,
  isFocused,
  isDuplicate,
  isError = false,
  onTextChanged,
  onFocus,
  onBlur,
  containerStyle,
  placeholder,
  placeholderTextColor = 'rgba(255,255,255,0.3)',
  keyboardType,
}: Props) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderRadius: 8,
          minWidth: 300,
          paddingHorizontal: 16,
          borderWidth: 1,
          borderColor: isError
            ? '#CC0023'
            : isFocused
            ? 'rgba(255,255,255,0.3)'
            : colors.fill60,
        },
        containerStyle,
      ]}>
      {/* TextInput */}
      <TextInput
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onTextChanged}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[
          Pretendard.SemiBold,
          {
            height: 48,
            fontSize: 17,
            flex: 1,
            color: colors.fill10,
          },
        ]}
      />
      {/* 아이디 중복확인 여부 */}
      {isDuplicate !== undefined && (
        <Animated.View animation={iconAnimation} duration={400}>
          {isDuplicate ? (
            <Image source={images.icons.check.circle.red} />
          ) : (
            <Image source={images.icons.check.circle.green} />
          )}
        </Animated.View>
      )}
    </View>
  );
};

export default UserIdInputComponent;
