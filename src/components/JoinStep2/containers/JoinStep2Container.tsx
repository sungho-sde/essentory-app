import {View, Text, Keyboard, TextInput} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import JoinStep2 from '../JoinStep2';

type Props = {};

const JoinStep2Container = (props: Props) => {
  const validateTextinputRef = useRef<TextInput>(null);

  const [isValidateModalOpen, setIsValidateModalOpen] = useState(false);

  const onSendValidateNumberPressed = useCallback(() => {
    setIsValidateModalOpen(true);
    setTimeout(() => {
      validateTextinputRef.current?.focus();
    }, 100);
  }, [validateTextinputRef]);

  const dismissValidateModal = useCallback(() => {
    setIsValidateModalOpen(false);
  }, []);

  return (
    <JoinStep2
      validateTextinputRef={validateTextinputRef}
      isValidateModalOpen={isValidateModalOpen}
      onSendValidateNumberPressed={onSendValidateNumberPressed}
      dismissValidateModal={dismissValidateModal}
    />
  );
};

export default JoinStep2Container;
