import { Cell, Matrix, Tetromino } from '../datatypes';
import {
  MOVE_TETROMINO,
  SPAWN_NEXT_TETROMINO
} from '../index';

const numRows = 20;
const numColumns = 10;

const initialState = {
  matrix: new Matrix(numRows, numColumns).map2D(
    (_, x, y) => new Cell(false, false, x, y)
  ),
  activeTetromino: new Tetromino(),
  tetrominoSpawned: false
};

const matrixReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPAWN_NEXT_TETROMINO: {
      return {
        matrix: action.matrix,
        activeTetromino: action.nextTetromino,
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

    default:
      return state;
  }
};

export default matrixReducer;
