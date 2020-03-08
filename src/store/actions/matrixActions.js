/********************************************************
*                    MATRIX ACTIONS                     *
********************************************************/
import { getRandomTetromino } from './helper';

/********************************************************
*                     ACTION TYPES                      *
********************************************************/
export const SPAWN_NEXT_TETROMINO = 'SPAWN_NEXT_TETROMINO',
  ROTATE_TETROMINO = 'ROTATE_TETROMINO',
  MOVE_TETROMINO = 'MOVE_TETROMINO',
  MANUAL_SOFTDROP_TETROMINO = 'SOFT_DROP_TETROMINO',
  MANUAL_FASTDROP_TETROMINO = 'FAST_DROP_TETROMINO';

/********************************************************
*                    ACTION CREATORS                    *
********************************************************/

export const spawnNextTetromino = (
  lastType = ''
) => dispatch => {
  dispatch({
    type: SPAWN_NEXT_TETROMINO,
    nextTetromino: getRandomTetromino()
  });
};

export const moveTetromino = (
  activeTetromino,
  direction
) => dispatch => {
  dispatch({
    type: MOVE_TETROMINO,
    activeTetromino: activeTetromino.shift(direction)
  });
};

export const rotateTetromino = activeTetromino => dispatch => {
  if (activeTetromino.type !== 'O')
    dispatch({
      type: MOVE_TETROMINO,
      activeTetromino: activeTetromino.rotate()
    });
};
