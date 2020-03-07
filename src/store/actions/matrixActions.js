/********************************************************
*                    MATRIX ACTIONS                     *
********************************************************/
import {
  getRandomTetromino,
  shiftTetrominoDown,
  shiftTetrominoLeft,
  shiftTetrominoRight
} from './helper';

/********************************************************
*                     ACTION TYPES                      *
********************************************************/
export const SPAWN_NEXT_TETROMINO = 'SPAWN_NEXT_TETROMINO',
  ROTATE_TETROMINO_LEFT = 'ROTATE_TETROMINO_LEFT',
  ROTATE_TETROMINO_RIGHT = 'ROTATE_TETROMINO_RIGHT',
  MOVE_TETROMINO_LEFT = 'MOVE_TETROMINO_LEFT',
  MOVE_TETROMINO_RIGHT = 'MOVE_TETROMINO_RIGHT',
  MOVE_TETROMINO_DOWN = 'MOVE_TETROMINO_DOWN',
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

export const autoDropActiveTetromino = activeTetromino => dispatch => {
  dispatch({
    type: AUTO_DROP_TETROMINO,
    payload: activeTetromino.drop()
  });
};

export const moveTetrominoDown = activeTetromino => dispatch => {
  dispatch({
    type: MOVE_TETROMINO_DOWN,
    payload: activeTetromino.drop()
  });
};

export const moveTetrominoLeft = activeTetromino => dispatch => {
  dispatch({
    type: MOVE_TETROMINO_LEFT,
    payload: activeTetromino.shiftLeft()
  });
};

export const moveTetrominoRight = activeTetromino => dispatch => {
  dispatch({
    type: MOVE_TETROMINO_RIGHT,
    payload: activeTetromino.shiftRight()
  });
};
