import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React from 'react';
import {hasNotch} from 'react-native-device-info';
import {Pretendard} from '@assets/fonts';
import colors from '@assets/colors';

type Props = {
  isAlert: boolean;
  onAlertSwitchPressed: () => void;
};

const Setting = ({isAlert, onAlertSwitchPressed}: Props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: hasNotch() ? 52 : 80,
        }}>
        <TouchableOpacity
          style={{
            // TODO: color chip not registered(CCNR)
            borderBottomColor: '#1A1A1B',
            borderBottomWidth: 1,
            paddingBottom: 24,
          }}>
          <Text
            style={[
              Pretendard.Regular,
              {
                fontSize: 16,
                color: 'white',
              },
            ]}>
            가이드 라인
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // TODO: color chip not registered(CCNR)
            borderBottomColor: '#1A1A1B',
            borderBottomWidth: 1,
            paddingBottom: 24,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 24,
          }}>
          <Text
            style={[
              Pretendard.Regular,
              {
                fontSize: 16,
                color: 'white',
              },
            ]}>
            알림 관리
          </Text>
          <Switch
            // trackColor={{false: 'red', true: colors.MAIN}}
            // thumbColor="white"
            // ios_backgroundColor={colors.MAIN}
            onValueChange={onAlertSwitchPressed}
            value={isAlert}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Setting;
