import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
const useInterval = (callback, dropDelay) => {
  const savedCallback = useRef();
  const { gameStarted } = useSelector(state => state.game);
  // Remember the latest callback.
  useEffect(
    () => {
      savedCallback.current = callback;
    },
    [callback]
  );

  // Set up the interval.
  useEffect(
    () => {
      function tick() {
        savedCallback.current();
      }
      if (gameStarted && dropDelay !== null) {
        const id = setInterval(tick, dropDelay);
        return () => {
          clearInterval(id);
        };
      }
    },
    [dropDelay, gameStarted]
  );
};

export default useInterval;
