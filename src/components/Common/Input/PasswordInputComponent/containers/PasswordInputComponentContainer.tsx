import {
  ColorValue,
  KeyboardTypeOptions,
  StyleProp,
  TextInput,
  ViewStyle,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import PasswordInputComponent from '../PasswordInputComponent';

// 외부에서 들어와서 Container단계에서 끝나는 properties
type OutsidePropsTypes = {
  borderType?: 'error' | 'succeed';
  isOpenPassword: boolean;
  onPasswordOpenPressed: (state: boolean) => void;
};

// 외부에서 들어와서 present까지 영향을 미치는 타입
export type CustomPasswordInputComponentContainerPropsTypes = {
  containerStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  isError?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onTextChanged: (str: string) => void;
};

type Props = CustomPasswordInputComponentContainerPropsTypes &
  OutsidePropsTypes;

const PasswordInputComponentContainer = ({
  isOpenPassword,
  onPasswordOpenPressed,
  borderType: parentBorderType,
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

  const [borderType, setBorderType] = useState<'error' | 'succeed' | undefined>(
    undefined,
  );

  /**
   * @description 비밀번호 보이기 및 안보이기 로직
   */
  const onEyePressed = useCallback(() => {
    setIsPasswordShow(!isPasswordShow);
    onPasswordOpenPressed(!isPasswordShow);
  }, [isPasswordShow, onPasswordOpenPressed]);

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

  // ___background function___

  const applyParentBorderType = useCallback(() => {
    setBorderType(parentBorderType);
  }, [parentBorderType]);

  const applyParentShowPassword = useCallback(() => {
    setIsPasswordShow(isOpenPassword);
  }, [isOpenPassword]);

  useEffect(() => {
    applyParentBorderType();
    return () => {};
  }, [applyParentBorderType]);

  useEffect(() => {
    applyParentShowPassword();
    return () => {};
  }, [applyParentShowPassword]);

  return (
    <PasswordInputComponent
      // must need properties
      inputRef={inputRef}
      isPasswordShow={isPasswordShow}
      isFocused={isFocused}
      borderType={borderType}
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
