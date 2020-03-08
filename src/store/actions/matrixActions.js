/********************************************************
*                    MATRIX ACTIONS                     *
********************************************************/
import { getRandomTetromino } from './helper';

/********************************************************
*                     ACTION TYPES                      *
********************************************************/
export const SPAWN_NEXT_TETROMINO = 'SPAWN_NEXT_TETROMINO',
  ROTATE_TETROMINO_LEFT = 'ROTATE_TETROMINO_LEFT',
  ROTATE_TETROMINO_RIGHT = 'ROTATE_TETROMINO_RIGHT',
  MOVE_TETROMINO = 'MOVE_TETROMINO',
  AUTO_DROP_TETROMINO = 'AUTO_DROP_TETROMINO',
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
    payload: getRandomTetromino(lastType)
  });
};

export const moveTetromino = (
  activeTetromino,
  direction
) => dispatch => {
  dispatch({
    type: MOVE_TETROMINO,
    payload: activeTetromino.shift(direction)
  });
};
