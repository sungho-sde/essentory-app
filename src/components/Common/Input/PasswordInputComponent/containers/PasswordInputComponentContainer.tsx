import {TextInput} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import PasswordInputComponent, {
  CustomTextInputComponentContainerPropsTypes,
} from '../PasswordInputComponent';

type Props = CustomTextInputComponentContainerPropsTypes;

const PasswordInputComponentContainer = ({
  isError,
  containerStyle,
  placeholder,
  placeholderTextColor,
  onTextChanged: onOutsideTextChangedFucntion,
  keyboardType,
}: Props) => {
  const inputRef = useRef<TextInput>(null);

  // Password 보이기 여부
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  // TextInput Focus 유무
  const [isFocused, setIsFocused] = useState(false);

  /**
   * @description 비밀번호 보이기 및 안보이기 로직
   */
  const onEyePressed = useCallback(() => {
    setIsPasswordShow(!isPasswordShow);
  }, [isPasswordShow]);

  /**
   * @description TextInput입력 이벤트 감지 함수
   */
  const onTextChanged = useCallback(
    (txt: string) => {
      const value = txt.trim();
      onOutsideTextChangedFucntion(value);
    },
    [onOutsideTextChangedFucntion],
  );

  /**
   * @description TextInput Focused 상태 함수
   */
  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  /**
   * @description TextInput Blur 상태 함수
   */
  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <PasswordInputComponent
      // must need properties
      inputRef={inputRef}
      isPasswordShow={isPasswordShow}
      isFocused={isFocused}
      onFocus={onFocus}
      onBlur={onBlur}
      onTextChanged={onTextChanged}
      onEyePressed={onEyePressed}
      // outside properties
      isError={isError}
      containerStyle={containerStyle}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      keyboardType={keyboardType}
    />
  );
};

export default PasswordInputComponentContainer;
