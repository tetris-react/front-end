import { BEGIN_TETRIS } from '../actions/gamePlayActions';

const initialState = {
  started: false
};

const gamePlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_TETRIS: {
      return {
        ...state,
        started: true
      };
    }
    default:
      return state;
  }
};

export default gamePlayReducer;
