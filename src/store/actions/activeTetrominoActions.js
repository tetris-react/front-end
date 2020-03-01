import getRandomTetromino from './helper/randomizer';

export const SPAWN_NEXT_TETROMINO = 'SPAWN_NEXT_TETROMINO';
export const ROTATE_TETROMINO_LEFT =
  'ROTATE_TETROMINO_LEFT';
export const ROTATE_TETROMINO_RIGHT =
  'ROTATE_TETROMINO_RIGHT';
export const MOVE_TETROMINO_LEFT = 'MOVE_TETROMINO_LEFT';
export const MOVE_TETROMINO_RIGHT = 'MOVE_TETROMINO_RIGHT';
export const MOVE_TETROMINO_DOWN = 'MOVE_TETROMINO_DOWN';
export const AUTO_DROP_TETROMINO = 'AUTO_DROP_TETROMINO';
export const SOFT_DROP_TETROMINO = 'SOFT_DROP_TETROMINO';
export const FAST_DROP_TETROMINO = 'FAST_DROP_TETROMINO';

export const spawnNextTetromino = lastTetrominoType => dispatch => {
  dispatch({
    type: SPAWN_NEXT_TETROMINO,
    payload: getRandomTetromino(lastTetrominoType)
  });
};
