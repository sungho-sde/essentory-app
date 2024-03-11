import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type LoginStackParamsListTypes = {
  login: undefined; // 로그인
  forgotPassword: undefined; // 비밀번호 찾기
  joinEmailWrite: undefined; // 이메일 작성하기 (이메일 가입시에만 사용함)
  joinPassword: {
    email: string;
  }; // 비밀번호 작성하기 (이메일 가입시에만 사용함)
  checkEmailVerification: {
    email: string; // 이메일 확인을 보낸 이메일
    uid: string; // 현재 로그인된 firebase uid
  }; // 이메일 인증 확인하기
  joinProfileWrite: {
    uid: string;
  }; // 초기 프로필 작성하기
};

export type LoginStackNavigationTypes =
  NativeStackNavigationProp<LoginStackParamsListTypes>;

export type JoinProfileWriteParamTypes = NativeStackScreenProps<
  LoginStackParamsListTypes,
  'joinProfileWrite'
>;

export type JoinPasswordParamTypes = NativeStackScreenProps<
  LoginStackParamsListTypes,
  'joinPassword'
>;

export type CheckEmailVerificationParamTypes = NativeStackScreenProps<
  LoginStackParamsListTypes,
  'checkEmailVerification'
>;
