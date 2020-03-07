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
  autoDropActiveTetromino,
  moveTetrominoLeft,
  moveTetrominoDown,
  moveTetrominoRight
} from './actions/matrixActions';

/********************************************************
*                       ACTION TYPES                    *
********************************************************/
export { BEGIN_TETRIS } from './actions/gamePlayActions';

export {
  SPAWN_NEXT_TETROMINO,
  ROTATE_TETROMINO_LEFT,
  ROTATE_TETROMINO_RIGHT,
  MOVE_TETROMINO_LEFT,
  MOVE_TETROMINO_RIGHT,
  MOVE_TETROMINO_DOWN,
  AUTO_DROP_TETROMINO,
  MANUAL_SOFTDROP_TETROMINO,
  MANUAL_FASTDROP_TETROMINO
} from './actions/matrixActions';
