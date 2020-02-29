import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dropActiveTetromino } from '../store/actions/grid-actions';

const useDropInterval = dropDelay => {
  const dispatch = useDispatch();
  const savedCallback = useRef();
  const {
    activeTetroCoords,
    tetrominoActive
  } = useSelector(state => state.matrix);

  useEffect(
    () => {
      savedCallback.current = () => {
        if (tetrominoActive)
          dispatch(dropActiveTetromino(activeTetroCoords));
      };
    },
    [tetrominoActive, activeTetroCoords]
  );

  useEffect(
    () => {
      if (tetrominoActive) {
        let interval = setInterval(
          savedCallback.current,
          dropDelay
        );
        return () => clearInterval(interval);
      }
    },
    [dropDelay, tetrominoActive]
  );
};

export default useDropInterval;
