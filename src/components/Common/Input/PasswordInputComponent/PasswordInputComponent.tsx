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

// 외부에서 들어오는 property 타입
export type CustomTextInputComponentContainerPropsTypes = {
  containerStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  isError?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onTextChanged: (str: string) => void;
};

// Container에서 Present로 주는 타입
export type CustomTextInputComponentPresenterPropsTypes = {
  inputRef: React.RefObject<TextInput>;
  isFocused: boolean;
  isPasswordShow: boolean;
  onEyePressed: () => void;
  onTextChanged: (txt: string) => void;
  onFocus: () => void;
  onBlur: () => void;
} & CustomTextInputComponentContainerPropsTypes;

type Props = CustomTextInputComponentPresenterPropsTypes;

const PasswordInputComponent = ({
  inputRef,
  isFocused,
  isPasswordShow,
  isError = false,
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
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderRadius: 8,
          minWidth: 300,
          paddingHorizontal: 16,
          borderWidth: 1,
          borderColor: isError
            ? '#CC0023'
            : isFocused
            ? 'rgba(255,255,255,0.3)'
            : 'rgba(255,255,255,0.05)',
        },
        containerStyle,
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
            color: 'rgba(255,255,255,0.85)',
          },
        ]}
      />
      {/* 비밀번호 보이기 버튼 */}
      <TouchableOpacity onPress={onEyePressed}>
        <Image source={images.icons.eye.open} />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInputComponent;
