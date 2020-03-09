/********************************************************
*                    MATRIX ACTIONS                     *
********************************************************/
import { getRandomTetromino, moveIsValid } from './helper';

/********************************************************
*                     ACTION TYPES                      *
********************************************************/
export const SPAWN_NEXT_TETROMINO = 'SPAWN_NEXT_TETROMINO',
  ROTATE_TETROMINO = 'ROTATE_TETROMINO',
  MOVE_TETROMINO = 'MOVE_TETROMINO',
  INVALID_MOVE = 'INVALID_MOVE',
  MANUAL_SOFTDROP_TETROMINO = 'SOFT_DROP_TETROMINO',
  MANUAL_FASTDROP_TETROMINO = 'FAST_DROP_TETROMINO';

/********************************************************
*                    ACTION CREATORS                    *
********************************************************/

export const spawnNextTetromino = () => (
  dispatch,
  state
) => {
  let { matrix, activeTetromino } = state().matrix;

  let nextTetromino = getRandomTetromino(
    activeTetromino.type
  );

  nextTetromino.coordinates.forEach(({ x, y }) => {
    matrix.cell(x, y).activate();
  });

  dispatch({
    type: SPAWN_NEXT_TETROMINO,
    matrix: matrix,
    nextTetromino: nextTetromino
  });
};

export const moveTetromino = (direction = 'down') => (
  dispatch,
  state
) => {
  let { matrix, activeTetromino } = state().matrix;
  const nextCoords = activeTetromino.shift(direction)
    .coordinates;

  if (matrix.inBounds(nextCoords)) {
    // deactivate all cells
    matrix.forEach2D(cell => cell.deactivate());

    // activate cells for next position
    nextCoords.forEach(({ x, y }) => {
      matrix.cell(x, y).activate();
    });

    dispatch({
      type: MOVE_TETROMINO,
      matrix: matrix,
      activeTetromino
    });
  } else {
    // shift the tetromino back
    activeTetromino.unshift(direction);

    dispatch({
      type: INVALID_MOVE,
      activeTetromino
    });
  }
};

export const rotateTetromino = () => (dispatch, state) => {
  let { matrix, activeTetromino } = state().matrix;

  const nextCoords = activeTetromino.rotate().coordinates;

  if (activeTetromino.type !== 'O') {
    if (matrix.inBounds(nextCoords)) {
      // deactivate all cells
      matrix.forEach2D(cell => cell.deactivate());

      // activate cells for next position
      nextCoords.forEach(({ x, y }) => {
        matrix.cell(x, y).activate();
      });

      dispatch({
        type: MOVE_TETROMINO,
        matrix: matrix,
        activeTetromino
      });
    } else {
      // shift the tetromino back
      activeTetromino.unrotate();

      dispatch({
        type: INVALID_MOVE,
        activeTetromino
      });
    }
  }
};
