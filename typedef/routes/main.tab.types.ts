import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';

export type BottomTabParamsListTypes = {
  feed: undefined;
  contents: undefined;
  funding: undefined;
  community: undefined;
  search: undefined;
};

export type BottomTabNavigationTypes =
  BottomTabNavigationProp<BottomTabParamsListTypes>;
