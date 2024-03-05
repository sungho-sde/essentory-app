import {
  ColorValue,
  KeyboardTypeOptions,
  StyleProp,
  TextInput,
  ViewStyle,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import UserIdInputComponent from '../UserIdInputComponent';
import {API, originUrl, requestGet} from '@lib/request';

// 외부에서 들어와서 Container단계에서 끝나는 properties
type OutsidePropsTypes = {
  onUserIdDuplicated: (isDuplicated: boolean) => void;
};

// 외부에서 들어와서 present까지 영향을 미치는 타입
export type CustomUserIdInputComponentContainerPropsTypes = {
  containerStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  placeholderTextColor?: ColorValue;
  isError?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onTextChanged: (str: string) => void;
};

type Props = CustomUserIdInputComponentContainerPropsTypes & OutsidePropsTypes;

const UserIdInputComponentContainer = ({
  isError,
  containerStyle,
  placeholder,
  placeholderTextColor,
  onTextChanged: onOutsideTextChangedFucntion,
  keyboardType,
  onUserIdDuplicated,
}: Props) => {
  const inputRef = useRef<TextInput>(null);

  // 아이디 중복확인 여부
  const [id, setId] = useState('');
  const [isDuplicate, setIsDuplicate] = useState<undefined | boolean>(
    undefined,
  );

  // TextInput Focus 유무
  const [isFocused, setIsFocused] = useState(false);

  /**
   * @description TextInput입력 이벤트 감지 함수
   */
  const onTextChanged = useCallback(
    (txt: string) => {
      setIsDuplicate(undefined);
      const value = txt.trim();
      setId(value);
      onOutsideTextChangedFucntion(value);
    },
    [onOutsideTextChangedFucntion],
  );

  /**
   * @description 아이디 중복여부 체크
   */
  const checkIdDuplicated = useCallback(async () => {
    const responseFromServer = await requestGet<{
      valid: boolean; // ID 사용가능 여부 true = 사용가능
      message: string; // 메세지
    }>(originUrl + API.auth.checkIdDuplicate + `?username=${id}`);

    setIsDuplicate(!responseFromServer.valid);
    onUserIdDuplicated(!responseFromServer.valid);
  }, [id, onUserIdDuplicated]);

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
    checkIdDuplicated();
  }, [checkIdDuplicated]);

  return (
    <UserIdInputComponent
      // must need properties
      inputRef={inputRef}
      isDuplicate={isDuplicate}
      isFocused={isFocused}
      onFocus={onFocus}
      onBlur={onBlur}
      onTextChanged={onTextChanged}
      // outside properties
      isError={isError}
      containerStyle={containerStyle}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      keyboardType={keyboardType}
    />
  );
};

export default UserIdInputComponentContainer;
