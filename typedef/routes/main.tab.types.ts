import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';

export type BottomTabParamsListTypes = {
  feed: undefined;
  contents: undefined;
  community: undefined;
  alert: undefined;
  profile: undefined;
};

export type BottomTabNavigationTypes =
  BottomTabNavigationProp<BottomTabParamsListTypes>;
