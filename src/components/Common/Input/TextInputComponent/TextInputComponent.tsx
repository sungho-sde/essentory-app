import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  ColorValue,
} from 'react-native';
import React from 'react';
import images from '@assets/images';
import {Pretendard} from '@assets/fonts';

export type CustomTextInputComponentPresenterPropsTypes = {
  inputRef: React.RefObject<TextInput>;
  isFocused: boolean;
  isDeleteBtnShow: boolean;
  isError?: boolean;
  onTextChanged: (txt: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  onDeletePressed: () => void;

  containerStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
};

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
  placeholderTextColor,
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
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onTextChanged}
        placeholder="값을 입력해주세요"
        placeholderTextColor={'rgba(255,255,255,0.3)'}
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
