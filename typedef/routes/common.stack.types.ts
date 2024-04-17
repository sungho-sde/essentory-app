import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {TestStackParamsListTypes} from './test.stack.types';

export type CommonStackParamsListTypes = {
  main: undefined;
  alert: undefined;

  // mypage stack
  setting: undefined;

  //creator stack
  creatorMainPage: undefined;

  feedPostDetailView: undefined;

  //mypage stack
  modifyProfile: undefined;
} & TestStackParamsListTypes;

export type CommonStackNavigationTypes =
  NativeStackNavigationProp<CommonStackParamsListTypes>;

// export type PleaseSendMultifileWarningParamTypes = NativeStackScreenProps<
//   CommonStackParamsListTypes,
//   'pleaseSendMultifileWarning'
// >;
