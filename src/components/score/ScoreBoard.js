import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ScoreBoard = () => {
  const { score, level, rowsCleared } = useSelector(state => state.game);
  return (
    <Container>
      <h1>Score</h1>
      <p>
        {score}
      </p>
      <h1>Level</h1>
      <p>
        {level}
      </p>
      <h1>Rows Cleared</h1>
      <p>
        {rowsCleared}
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 20px;

  border: 1px solid black;

  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 3rem;
  }
`;

export default ScoreBoard;
