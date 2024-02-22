import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

function useKeyboardHeight() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', e => {
      setHeight(e.endCoordinates.height);
    });

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
    };
  }, []);

  return {
    height,
  };
}

export default useKeyboardHeight;
