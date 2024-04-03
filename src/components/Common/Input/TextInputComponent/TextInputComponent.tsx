import {View, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import images from '@assets/images';
import {Pretendard} from '@assets/fonts';
import {CustomTextInputComponentContainerPropsTypes} from './containers/TextInputComponentContainer';
import {colors} from '@assets/colors';

// Container에서 Present로 주는 타입
export type CustomTextInputComponentPresenterPropsTypes = {
  inputRef: React.RefObject<TextInput>;
  isFocused: boolean;
  isDeleteBtnShow: boolean;
  onTextChanged: (txt: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  onDeletePressed: () => void;
} & CustomTextInputComponentContainerPropsTypes;

type Props = CustomTextInputComponentPresenterPropsTypes;

const TextInputComponent = ({
  inputRef,
  isFocused,
  isError = false,
  isDeleteBtnShow,
  onTextChanged,
  onFocus,
  onBlur,
  onDeletePressed,
  containerStyle,
  placeholder,
  placeholderTextColor = 'rgba(255,255,255,0.3)',
  keyboardType,
  secureTextEntry,
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
        secureTextEntry={secureTextEntry}
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
      {/* 삭제버튼 */}
      {isDeleteBtnShow && (
        <TouchableOpacity onPress={onDeletePressed}>
          <Image source={images.icons.cancel.gray} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputComponent;
