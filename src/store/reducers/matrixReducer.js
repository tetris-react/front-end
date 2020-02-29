import {
  DROP_ACTIVE_TETROMINO,
  SPAWN_TETROMINO_T
} from '../actions/matrixActions';
import { map2DArray, new2DArray } from './helper';

const numRows = 20;
const numColumns = 10;

const initialCellState = {
  isActive: false,
  isLocked: false,
  x: 0,
  y: 0
};

const initialState = {
  matrix: new2DArray(numRows, numColumns, initialCellState)
};

const matrixReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default matrixReducer;
