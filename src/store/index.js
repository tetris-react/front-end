/********************************************************
*                        REDUCERS                      *
********************************************************/
import { combineReducers } from 'redux';
import activeTetrominoReducer from './reducers/activeTetrominoReducer';
import matrixReducer from './reducers/matrixReducer';

export default combineReducers({
  matrix: matrixReducer,
  activeTetromino: activeTetrominoReducer
});

/********************************************************
*                        ACTIONS                        *
********************************************************/
export {
  // ACTIONS
  dropActiveTetromino,
  // ACTION TYPES
  SPAWN_TETROMINO_T,
  DROP_ACTIVE_TETROMINO
} from './actions/matrixActions';
