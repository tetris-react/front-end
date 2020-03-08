import tetrominos from '../../datatypes/types/Tetromino';

/*
  Based on the original Tetris NES, Random Generator Algorithm:

  0 - 6 represent the seven tetrominos
  7 represents a "re-roll"
  if an 7 or the previous tetromino is rolled,
  re-roll
  otherwise return the next tetromino

  NOTE: omitted the 7 re-roll as it's arbitrary
*/
export const getRandomTetromino = lastType => {
  let nextNumber;

  do {
    nextNumber = Math.floor(Math.random() * 7);
  } while (tetrominos[nextNumber].type === lastType);

  return tetrominos[nextNumber];
};
