import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useListenKeyPress } from '../../custom-hooks';
import {
  checkFilledRows,
  checkTetrominoBlocked,
  moveTetromino,
  spawnNextTetromino
} from '../../store/index';
import { Cell } from './Cell';

const Matrix = () => {
  const direction = useListenKeyPress();
  const dispatch = useDispatch();

  const {
    matrix,
    activeTetrominoLocked,
    tetrominoSpawned
  } = useSelector(state => state.matrix);

  const { gameStarted, delay } = useSelector(
    state => state.game
  );

  useEffect(
    () => {
      if (gameStarted) dispatch(spawnNextTetromino());
    },
    [gameStarted, dispatch]
  );

  useEffect(
    () => {
      if (activeTetrominoLocked) {
        dispatch(checkFilledRows());
        dispatch(spawnNextTetromino());
      }
    },
    [activeTetrominoLocked, dispatch]
  );

  useEffect(
    () => {
      let interval;

      if (tetrominoSpawned && !activeTetrominoLocked)
        interval = setInterval(() => {
          dispatch(checkTetrominoBlocked());
          dispatch(moveTetromino());
        }, delay);

      return () => clearInterval(interval);
    },
    [
      tetrominoSpawned,
      activeTetrominoLocked,
      delay,
      dispatch
    ]
  );

  useEffect(
    () => {
      if (direction) dispatch(moveTetromino(direction));
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
            color={cell.color}
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
