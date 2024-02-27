import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type LoginStackParamsListTypes = {
  login: undefined; // 로그인
  forgotPassword: undefined; // 비밀번호 찾기
  joinEmailWrite: undefined; // 이메일 작성하기 (이메일 가입시에만 사용함)
};

export type LoginStackNavigationTypes =
  NativeStackNavigationProp<LoginStackParamsListTypes>;

// export type PleaseSendMultifileWarningParamTypes = NativeStackScreenProps<
//   CommonStackParamsListTypes,
//   'pleaseSendMultifileWarning'
// >;
