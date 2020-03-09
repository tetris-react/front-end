import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useListenKeyPress } from '../../custom-hooks/';
import {
  moveTetromino,
  rotateTetromino,
  spawnNextTetromino
} from '../../store/index';
import { Cell } from './components/Cell';

const Matrix = () => {
  const {
    matrix,
    activeTetromino,
    tetrominoSpawned
  } = useSelector(state => state.matrix);

  const gameStarted = useSelector(
    state => state.game.started
  );

  const direction = useListenKeyPress();

  const dispatch = useDispatch();

  useEffect(
    () => {
      if (gameStarted) {
        dispatch(spawnNextTetromino());
      }
    },
    [gameStarted, dispatch]
  );

  useEffect(
    () => {
      if (tetrominoSpawned) {
        const interval = setInterval(() => {
          dispatch(moveTetromino());
        }, 1000);
        return () => clearInterval(interval);
      }
    },
    [tetrominoSpawned, matrix, activeTetromino, dispatch]
  );

  useEffect(
    () => {
      if (direction) {
        direction === 'rotate'
          ? dispatch(rotateTetromino())
          : dispatch(moveTetromino(direction));
      }
    },
    [direction, dispatch]
  );

  return (
    <Container>
      {matrix.flatten().map((cell, i) => {
        return (
          <Cell
            key={i}
            isLocked={cell.isLocked}
            isActive={cell.isActive}
            coordinate={{
              x: cell.x,
              y: cell.y
            }}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100vw;
  height: 56.25vw;
  max-width: calc(100% / 3);
  max-height: 100vh;
  margin: auto;

  background-color: #d0d0df;
`;

export default Matrix;
