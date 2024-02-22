import {Platform, StyleProp, TextStyle} from 'react-native';

const ANROID_LINEHEIGHT_RATE = 1.5;

type FontStructureType = 'fontFamily' | 'fontWeight' | 'includeFontPadding';

type FontContainerTypes = {
  Light: StyleProp<Pick<TextStyle, FontStructureType>>;
  Regular: StyleProp<Pick<TextStyle, FontStructureType>>;
  Medium: StyleProp<Pick<TextStyle, FontStructureType>>;
  SemiBold: StyleProp<Pick<TextStyle, FontStructureType>>;
  Bold: StyleProp<Pick<TextStyle, FontStructureType>>;
};

export const Pretendard: FontContainerTypes = {
  Light: {
    fontFamily: 'pretendard-light',
    includeFontPadding: false,
  },
  Regular: {
    fontFamily: 'pretendard-regular',
    includeFontPadding: false,
  },
  Medium: {
    fontFamily: 'pretendard-medium',
    includeFontPadding: false,
  },
  SemiBold: {
    fontFamily: 'pretendard-semibold',
    includeFontPadding: false,
  },
  Bold: {
    fontFamily: 'pretendard-bold',
    includeFontPadding: false,
  },
};

export const Poppins: FontContainerTypes = {
  Light: {
    fontFamily: 'poppins-light',
    includeFontPadding: false,
  },
  Regular: {
    fontFamily: 'poppins-regular',
    includeFontPadding: false,
  },
  Medium: {
    fontFamily: 'poppins-medium',
    includeFontPadding: false,
  },
  SemiBold: {
    fontFamily: 'poppins-semibold',
    includeFontPadding: false,
  },
  Bold: {
    fontFamily: 'poppins-bold',
    includeFontPadding: false,
  },
};
