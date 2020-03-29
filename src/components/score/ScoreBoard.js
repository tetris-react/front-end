import React from 'react';
import { useSelector } from 'react-redux';
import { Column } from '../../styles';

const ScoreBoard = () => {
  const { score, level, rowsCleared } = useSelector(state => state.game);
  return (
    <Column>
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
    </Column>
  );
};

export default ScoreBoard;
