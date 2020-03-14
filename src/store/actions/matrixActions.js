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
  LOCK_ACTIVE_TETROMINO = 'LOCK_ACTIVE_TETROMINO',
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

  matrix.activateCoordinates(nextTetromino.coordinates);

  dispatch({
    type: SPAWN_NEXT_TETROMINO,
    matrix: matrix,
    nextTetromino: nextTetromino
  });
};

export const checkTetrominoBlocked = (
  direction = 'down'
) => (dispatch, state) => {
  let { matrix, activeTetromino } = state().matrix;
  const nextCoords = activeTetromino.getNextCoords(
    direction
  );

  if (
    matrix.inBounds(nextCoords) == false ||
    matrix.notBlocked(nextCoords) == false
  ) {
    matrix.lockCoordinates(activeTetromino.coordinates);
    matrix.deactivateCoordinates(
      activeTetromino.coordinates
    );

    dispatch({
      type: LOCK_ACTIVE_TETROMINO,
      matrix: matrix,
      activeTetromino
    });
  }
};

export const moveTetromino = (direction = 'down') => (
  dispatch,
  state
) => {
  let { matrix, activeTetromino } = state().matrix;
  const nextCoords = activeTetromino.getNextCoords(
    direction
  );

  // console.log(
  //   'activeTetromino.coordinates',
  //   activeTetromino.coordinates
  // );

  if (
    matrix.inBounds(nextCoords) &&
    matrix.notBlocked(nextCoords)
  ) {
    // deactivate cells for current position
    matrix.deactivateCoordinates(
      activeTetromino.coordinates
    );

    matrix.activateCoordinates(nextCoords);

    // shifts coordinates of activeTetromino
    activeTetromino.shift(direction);

    dispatch({
      type: MOVE_TETROMINO,
      matrix: matrix,
      activeTetromino
    });
  } else {
    dispatch({
      type: INVALID_MOVE
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
