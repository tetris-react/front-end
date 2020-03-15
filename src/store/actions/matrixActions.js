import { Cell, Matrix } from '../datatypes';
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
  MANUAL_FASTDROP_TETROMINO = 'FAST_DROP_TETROMINO',
  ROWS_DELETED = 'ROWS_DELETED';

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

  matrix.activateCoordinates(
    nextTetromino.coordinates,
    nextTetromino.color
  );

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
    matrix.deactivateCoordinates(
      activeTetromino.coordinates
    );
    matrix.lockCoordinates(activeTetromino.coordinates);

    dispatch({
      type: LOCK_ACTIVE_TETROMINO,
      matrix: matrix,
      activeTetromino
    });
  }
};

export const checkFilledRows = () => (dispatch, state) => {
  let { matrix, activeTetromino } = state().matrix;

  let collapsedMatrix = matrix.deleteFilledRows(
    activeTetromino.coordinates
  );

  console.log('collapsedMatrix', collapsedMatrix);

  if (collapsedMatrix.length) {
    matrix = new Matrix(20, 10).map2D((cell, x, y) => {
      let mappedY = y - (20 - collapsedMatrix.length);

      if (y < 20 - collapsedMatrix.length) {
        return new Cell('#000000', false, false, x, y);
      }
      let color = collapsedMatrix[mappedY][x].color;
      let isActive = collapsedMatrix[mappedY][x].isActive;
      let isLocked = collapsedMatrix[mappedY][x].isLocked;
      return new Cell(color, isActive, isLocked, x, y);
    });
  }
  dispatch({
    type: ROWS_DELETED,
    matrix: matrix
  });
};

export const moveTetromino = (direction = 'down') => (
  dispatch,
  state
) => {
  let { matrix, activeTetromino } = state().matrix;

  const nextCoords =
    direction !== 'rotate'
      ? activeTetromino.getNextCoords(direction)
      : activeTetromino.getNextRotationCoords(direction);

  if (
    matrix.inBounds(nextCoords) &&
    matrix.notBlocked(nextCoords)
  ) {
    // deactivate cells for current position
    matrix.deactivateCoordinates(
      activeTetromino.coordinates
    );

    matrix.activateCoordinates(
      nextCoords,
      activeTetromino.color
    );

    // shifts coordinates of activeTetromino
    direction !== 'rotate'
      ? activeTetromino.shift(direction)
      : activeTetromino.rotate();

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
