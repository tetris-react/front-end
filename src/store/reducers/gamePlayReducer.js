import { BEGIN_TETRIS } from '../actions/gamePlayActions';

const initialState = {
  gameStarted: false,
  delay: 250,
  tetrominoInPlay: false
};

const gamePlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_TETRIS: {
      return {
        ...state,
        gameStarted: true
      };
    }
    default:
      return state;
  }
};

export default gamePlayReducer;
