import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  dropActiveTetromino,
  spawnTetromino_T
} from '../../store';
import { Cell } from './components/Cell';

const Matrix = () => {
  const dispatch = useDispatch();
  const {
    matrix,
    tetrominoActive,
    activeTetroCoords,
    dropDelay
  } = useSelector(state => state.matrix);

  // useEffect(
  //   () => {
  //     if (!tetrominoActive) {
  //       dispatch(spawnTetromino_T());
  //     }
  //   },
  //   [matrix, tetrominoActive, dispatch]
  // );

  // useEffect(
  //   () => {
  //     if (tetrominoActive) {
  //       const interval = setInterval(() => {
  //         dispatch(dropActiveTetromino(activeTetroCoords));
  //       }, dropDelay);

  //       return () => clearInterval(interval);
  //     }
  //   },
  //   [activeTetroCoords, dropDelay, tetrominoActive]
  // );

  return (
    <Container>
      {matrix.map(column =>
        column.map(cell => {
          return (
            <Cell
              key={cell.x + cell.y}
              isLocked={cell.isLocked}
              isActive={cell.isActive}
              coordinate={{
                x: cell.x,
                y: cell.y
              }}
            />
          );
        })
      )}
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
