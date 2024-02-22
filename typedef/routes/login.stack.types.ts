import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type LoginStackParamsListTypes = {
  login: undefined; // 로그인
  forgotPassword: undefined; // 비밀번호 찾기
  joinStep1: undefined; // 이메일, 비밀번호
  joinStep2: undefined; // 이름 생년월일 휴대폰번호
};

export type LoginStackNavigationTypes =
  NativeStackNavigationProp<LoginStackParamsListTypes>;

// export type PleaseSendMultifileWarningParamTypes = NativeStackScreenProps<
//   CommonStackParamsListTypes,
//   'pleaseSendMultifileWarning'
// >;
