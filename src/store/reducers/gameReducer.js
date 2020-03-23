import { G } from '../../constants';
import { START_GAME } from '../index';
const initialState = {
  gameStarted: false,
  frameRate: G[10],
  level: 0
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        gameStarted: true
      };
    default:
      return state;
  }
};

export default gameReducer;
