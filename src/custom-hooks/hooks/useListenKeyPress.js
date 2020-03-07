import { useEffect, useState } from 'react';

const useListenKeyPress = () => {
  const [pressedKey, setPressedKey] = useState(null);

  const keyDownHandler = e => {
    switch (e.keyCode) {
      case 40:
        setPressedKey('down');
        break;
      case 37:
        setPressedKey('left');
        break;
      case 39:
        setPressedKey('right');
        break;
      default:
        setPressedKey('');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', setPressedKey(''));

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.addEventListener('keyup', setPressedKey(''));
    };
  });

  return pressedKey;
};

export default useListenKeyPress;
