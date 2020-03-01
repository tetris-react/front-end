import { SPAWN_NEXT_TETROMINO } from '../actions/activeTetrominoActions';

const initialState = {
  type: '',
  initialCoordinates: [],
  rotationalCoordinate: {},
  orientation: ''
};

const activeTetrominoReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SPAWN_NEXT_TETROMINO: {
      const nextTetromino = action.payload;
      return {
        type: nextTetromino.type,
        initialCoordinates:
          nextTetromino.initialCoordinates,
        rotationalCoordinate:
          nextTetromino.rotationalCoordinate,
        orientation: nextTetromino.orientation
      };
    }
    default:
      return state;
  }
};

export default activeTetrominoReducer;
