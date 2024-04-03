import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  ColorValue,
  KeyboardTypeOptions,
} from 'react-native';
import React from 'react';
import images from '@assets/images';
import {Pretendard} from '@assets/fonts';
import {CustomPasswordInputComponentContainerPropsTypes} from './containers/PasswordInputComponentContainer';
import {colors} from '@assets/colors';

// Container에서 Present로 주는 타입
export type CustomPasswordInputComponentPresenterPropsTypes = {
  inputRef: React.RefObject<TextInput>;
  isFocused: boolean;
  isPasswordShow: boolean;
  borderType?: 'succeed' | 'error';
  onEyePressed: () => void;
  onTextChanged: (txt: string) => void;
  onFocus: () => void;
  onBlur: () => void;
} & CustomPasswordInputComponentContainerPropsTypes;

type Props = CustomPasswordInputComponentPresenterPropsTypes;

const PasswordInputComponent = ({
  inputRef,
  isFocused,
  isPasswordShow,
  isError = false,
  borderType,
  onTextChanged,
  onEyePressed,
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
          backgroundColor: colors.frostedFillBlack20,
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
        borderType && {
          borderColor: borderType === 'succeed' ? '#00B23B' : '#CC0023',
        },
      ]}>
      {/* TextInput */}
      <TextInput
        secureTextEntry={!isPasswordShow}
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
      {/* 비밀번호 보이기 버튼 */}
      <TouchableOpacity onPress={onEyePressed}>
        <Image
          source={
            isPasswordShow ? images.icons.eye.close : images.icons.eye.open
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInputComponent;
