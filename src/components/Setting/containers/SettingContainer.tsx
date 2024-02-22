import {View, Text} from 'react-native';
import React, {useCallback, useState} from 'react';
import Setting from '../Setting';

type Props = {};

const SettingContainer = (props: Props) => {
  const [isAlert, setIsAlert] = useState(true);

  const onAlertSwitchPressed = useCallback(() => {
    setIsAlert(!isAlert);
  }, [isAlert]);

  return (
    <Setting isAlert={isAlert} onAlertSwitchPressed={onAlertSwitchPressed} />
  );
};

export default SettingContainer;
