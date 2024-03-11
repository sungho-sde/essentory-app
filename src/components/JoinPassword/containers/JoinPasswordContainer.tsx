import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import JoinPassword from '../JoinPassword';
import {useNavigation} from '@react-navigation/native';
import {
  JoinPasswordParamTypes,
  LoginStackNavigationTypes,
} from '@typedef/routes/login.stack.types';
import auth from '@react-native-firebase/auth';

type Props = {};

const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/;

const JoinPasswordContainer = ({
  route: {
    params: {email},
  },
}: JoinPasswordParamTypes) => {
  const navigation = useNavigation<LoginStackNavigationTypes>();

  const [borderType, setBorderType] = useState<undefined | 'succeed' | 'error'>(
    undefined,
  );
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [isPasswordConfirmVerified, setIsPasswordConfirmVerified] =
    useState(false);

  const onPasswordShowPressed = useCallback((isOpen: boolean) => {
    setIsShowPassword(isOpen);
  }, []);

  const onPasswordTextChanged = useCallback((txt: string) => {
    setPassword(txt);
  }, []);

  const onPasswordConfirmTextChanged = useCallback((txt: string) => {
    setPasswordConfirm(txt);
  }, []);

  const [isReadyForSubmit, setIsReadyForSubmit] = useState(false);

  const onSubmitPressed = useCallback(async () => {
    const Fauth = auth();
    try {
      const credential = await Fauth.createUserWithEmailAndPassword(
        email,
        password,
      );

      const user = credential.user;

      // 이메일 인증 보내기
      await user.sendEmailVerification();

      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'login',
          },
          {
            name: 'checkEmailVerification',
            params: {
              email,
              uid: user.uid,
            },
          },
        ],
      });
    } catch (error) {
      console.log(error);
      const {code, message} = error as {
        code: string;
        message: string;
      };

      console.log(code);
      console.log(message);

      // 제공된 이메일을 기존 사용자가 이미 사용 중입니다. 각 사용자마다 이메일이 고유해야 합니다.
      if (code === 'auth/email-already-exists') {
        return;
      }

      // 	email 사용자 속성에 제공된 값이 잘못되었습니다. 이 값은 문자열 이메일 주소여야 합니다.
      if (code === 'auth/invalid-email') {
        return;
      }
    }
  }, [email, password]);

  // __background functions__

  const checkPasswordsVerified = useCallback(() => {
    setIsReadyForSubmit(false);
    setIsPasswordVerified(passwordRegex.test(password));
    setIsPasswordConfirmVerified(passwordRegex.test(passwordConfirm));

    // define borderType
    const isPasswordsInitialState = isPasswordInitialState(
      password,
      passwordConfirm,
    );

    if (isPasswordsInitialState) {
      setBorderType(undefined);
      return;
    }

    if (
      passwordRegex.test(password) &&
      passwordRegex.test(passwordConfirm) &&
      password === passwordConfirm
    ) {
      setBorderType('succeed');
      setIsReadyForSubmit(true);
      return;
    }

    setBorderType('error');
  }, [password, passwordConfirm]);

  useEffect(() => {
    checkPasswordsVerified();
    return () => {};
  }, [checkPasswordsVerified]);

  return (
    <JoinPassword
      isShowPassword={isShowPassword}
      borderType={borderType}
      password={password}
      passwordConfirm={passwordConfirm}
      isPasswordConfirmVerified={isPasswordConfirmVerified}
      isPasswordVerified={isPasswordVerified}
      isReadyForSubmit={isReadyForSubmit}
      onPasswordTextChanged={onPasswordTextChanged}
      onPasswordConfirmTextChanged={onPasswordConfirmTextChanged}
      onPasswordShowPressed={onPasswordShowPressed}
      onSubmitPressed={onSubmitPressed}
    />
  );
};

export default JoinPasswordContainer;

// 비밀번호 및 비밀번호 확인이 빈 값인지 체크하는 함수
function isPasswordInitialState(
  password: string,
  passwordConfirm: string,
): boolean {
  return password.length === 0 && passwordConfirm.length === 0;
}
