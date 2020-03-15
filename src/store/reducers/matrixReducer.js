import { Cell, Matrix, Tetromino } from '../datatypes';
import {
  LOCK_ACTIVE_TETROMINO,
  MOVE_TETROMINO,
  ROWS_DELETED,
  SPAWN_NEXT_TETROMINO
} from '../index';

const numRows = 20;
const numColumns = 10;

const initialState = {
  matrix: new Matrix(numRows, numColumns).map2D(
    (cell, x, y) => new Cell('#000000', false, false, x, y)
  ),
  activeTetromino: new Tetromino(),
  activeTetrominoLocked: false,
  tetrominoSpawned: false
};

const matrixReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPAWN_NEXT_TETROMINO: {
      return {
        matrix: action.matrix,
        activeTetromino: action.nextTetromino,
        activeTetrominoLocked: false,
        tetrominoSpawned: true
      };
    }

    case MOVE_TETROMINO: {
      return {
        matrix: action.matrix,
        activeTetromino: action.activeTetromino,
        ...state
      };
    }

    case LOCK_ACTIVE_TETROMINO: {
      return {
        ...state,
        matrix: action.matrix,
        tetrominoSpawned: false,
        activeTetrominoLocked: true
      };
    }

    case ROWS_DELETED: {
      return {
        ...state,
        matrix: action.matrix
      };
    }

    default:
      return state;
  }
};

export default matrixReducer;
