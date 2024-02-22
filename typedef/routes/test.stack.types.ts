import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type TestStackParamsListTypes = {
  // test stack
  test: undefined;
  testShareButton: undefined;
  testComponent: undefined;
};

export type TestStackNavigationTypes =
  NativeStackNavigationProp<TestStackParamsListTypes>;

// export type PleaseSendMultifileWarningParamTypes = NativeStackScreenProps<
//   TestStackParamsListTypes,
//   'pleaseSendMultifileWarning'
// >;
