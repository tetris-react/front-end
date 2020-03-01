/********************************************************
*                        REDUCERS                      *
********************************************************/
import { combineReducers } from 'redux';
import activeTetrominoReducer from './reducers/activeTetrominoReducer';
import gamePlayReducer from './reducers/gamePlayReducer';
import matrixReducer from './reducers/matrixReducer';

export default combineReducers({
  matrix: matrixReducer,
  activeTetromino: activeTetrominoReducer,
  game: gamePlayReducer
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

export {
  // ACTIONS
  spawnNextTetromino,
  // ACTION TYPES
  SPAWN_NEXT_TETROMINO,
  ROTATE_TETROMINO_LEFT,
  ROTATE_TETROMINO_RIGHT,
  MOVE_TETROMINO_LEFT,
  MOVE_TETROMINO_RIGHT,
  MOVE_TETROMINO_DOWN,
  AUTO_DROP_TETROMINO,
  SOFT_DROP_TETROMINO,
  FAST_DROP_TETROMINO
} from './actions/activeTetrominoActions';

export {
  beginTetris,
  BEGIN_TETRIS
} from './actions/gamePlayActions';
