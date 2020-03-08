/********************************************************
*                        REDUCERS                      *
********************************************************/
import { combineReducers } from 'redux';
import gamePlayReducer from './reducers/gamePlayReducer';
import matrixReducer from './reducers/matrixReducer';

export default combineReducers({
  matrix: matrixReducer,
  game: gamePlayReducer
});

/********************************************************
*                     ACTION CREATORS                   *
********************************************************/
export { beginTetris } from './actions/gamePlayActions';

export {
  spawnNextTetromino,
  moveTetromino,
  rotateTetromino
} from './actions/matrixActions';

/********************************************************
*                       ACTION TYPES                    *
********************************************************/
export { BEGIN_TETRIS } from './actions/gamePlayActions';

export {
  SPAWN_NEXT_TETROMINO,
  ROTATE_TETROMINO,
  MOVE_TETROMINO,
  MANUAL_SOFTDROP_TETROMINO,
  MANUAL_FASTDROP_TETROMINO
} from './actions/matrixActions';
