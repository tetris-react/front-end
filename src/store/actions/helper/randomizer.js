import tetrominos from './tetrominos';

/*
  Based on the original Tetris NES, Random Generator Algorithm:

  0 - 6 represent the seven tetrominos
  7 represents a "re-roll"
  if an 7 or the previous tetromino is rolled,
  re-roll
  otherwise return the next tetromino
*/

const getRandomTetromino = lastTetrominoType => {
  const nextNumber = Math.floor(Math.random() * 8);

  if (nextNumber === 7)
    getRandomTetromino(lastTetrominoType);
  if (tetrominos[nextNumber].type === lastTetrominoType)
    getRandomTetromino(lastTetrominoType);

  return tetrominos[nextNumber];
};

export default getRandomTetromino;
