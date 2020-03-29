import React from 'react';
import { useSelector } from 'react-redux';
import { ScoreBoardContainer } from './styles/ScoreBoardContainer';

const ScoreBoard = () => {
  const { score, level, rowsCleared } = useSelector(state => state.game);
  return (
    <ScoreBoardContainer>
      <section>
        <div>
          <span>Top Score</span>
          <span>0182725</span>
        </div>
        <hr />
        <div>
          <span>Score</span>
          <span>
            {score}
          </span>
        </div>
      </section>

      <section>
        <div>
          <span>Lines</span>
          <span>
            {rowsCleared}
          </span>
        </div>
        <div>
          <span>Level</span>
          <span>
            {level}
          </span>
        </div>
        <hr />
        <div>
          <span>Tetris #</span>
          <span>16</span>
        </div>
        <div>
          <span>Tetris %</span>
          <span>.05</span>
        </div>
        <hr />
      </section>

      <section>
        <div>
          <span>APM - (Attack / min)</span>
          <span>148.02</span>
        </div>
        <div>
          <span>PPM - (Pieces Process / min)</span>
          <span>26.46</span>
        </div>
      </section>
    </ScoreBoardContainer>
  );
};

export default ScoreBoard;
