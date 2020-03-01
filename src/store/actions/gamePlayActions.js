export const BEGIN_TETRIS = 'BEGIN_TETRIS';

export const beginTetris = () => dispatch => {
  dispatch({ type: BEGIN_TETRIS });
};
