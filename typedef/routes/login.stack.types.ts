import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type LoginStackParamsListTypes = {
  login: undefined; // 로그인
  forgotPassword: undefined; // 비밀번호 찾기
};

export type LoginStackNavigationTypes =
  NativeStackNavigationProp<LoginStackParamsListTypes>;

// export type PleaseSendMultifileWarningParamTypes = NativeStackScreenProps<
//   CommonStackParamsListTypes,
//   'pleaseSendMultifileWarning'
// >;
