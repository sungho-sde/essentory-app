import {View, Text, Linking} from 'react-native';
import React, {useCallback} from 'react';
import PasswordResetEmailComplete from '../PasswordResetEmailComplete';
import {PasswordResetEmailCompleteParamTypes} from '@typedef/routes/login.stack.types';

const PasswordResetEmailCompleteContainer = ({
  route: {
    params: {email},
  },
}: PasswordResetEmailCompleteParamTypes) => {
  const openEmailPressed = useCallback(async () => {
    Linking.openURL(`https://${email.split('@')[1]}`);
  }, []);

  return (
    <PasswordResetEmailComplete
      email={email}
      openEmailPressed={openEmailPressed}
    />
  );
};

export default PasswordResetEmailCompleteContainer;
