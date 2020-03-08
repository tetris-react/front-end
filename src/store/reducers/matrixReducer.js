import { Cell, Matrix, Tetromino } from '../datatypes';
import {
  AUTO_DROP_TETROMINO,
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
  const matrix = state.matrix;

  switch (action.type) {
    case SPAWN_NEXT_TETROMINO: {
      const nextTetromino = action.payload;
      const initialCoordinates = nextTetromino.coordinates;

      return {
        matrix: matrix.map2D((cell, x, y) => {
          initialCoordinates.forEach(coordinate => {
            if (x === coordinate.x && y === coordinate.y) {
              cell.activate();
            }
          });
          return cell;
        }),
        activeTetromino: nextTetromino,
        tetrominoSpawned: true
      };
    }

    case MOVE_TETROMINO: {
      const activeTetromino = action.payload;
      const nextCoordinates = activeTetromino.coordinates;
      return {
        matrix: matrix.map2D(cell => {
          cell.deactivate();
          nextCoordinates.forEach(coord => {
            if (cell.x === coord.x && cell.y === coord.y) {
              cell.activate();
            }
          });
          return cell;
        }),
        activeTetromino: action.payload,
        ...state
      };
    }

    default:
      return state;
  }
};

export default matrixReducer;
