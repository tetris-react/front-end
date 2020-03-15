import { Tetromino } from '../../datatypes/types/Tetromino';
import * as data from './data.json';
/*
  Based on the original Tetris NES, Random Generator Algorithm:

  0 - 6 represent the seven tetrominos
  7 represents a "re-roll"
  if an 7 or the previous tetromino is rolled,
  re-roll
  otherwise return the next tetromino

  NOTE: omitted the 7 re-roll as it's arbitrary
*/
const types = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];

export const getRandomTetromino = lastType => {
  let nextNumber, nextType;
  let tetrominos = deepCopy(data.default);

  do {
    nextNumber = Math.floor(Math.random() * 7);
    nextType = types[nextNumber];
  } while (nextType === lastType);

  return new Tetromino(
    tetrominos[nextType].type,
    tetrominos[nextType].color,
    tetrominos[nextType].coordinates,
    tetrominos[nextType].rotationalIndex,
    tetrominos[nextType].rotationalDistances
  );
};

function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}
