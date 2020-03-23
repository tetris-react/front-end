import { spawnTetrad } from '../index';
export const START_GAME = 'START_GAME';

export const startGame = () => dispatch => {
  dispatch({ type: START_GAME });
  dispatch(spawnTetrad());
};
