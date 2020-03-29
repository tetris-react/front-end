import React from 'react';
import { useSelector } from 'react-redux';
import { Playfield } from './components';
import StartGameModal from './components/modals/StartGameModal';
import ScoreBoard from './components/score/ScoreBoard';
import { AppContainer, Column as PlaceHolder } from './styles';

function Tetris() {
  const { gameStarted } = useSelector(state => state.game);

  return (
    <AppContainer>
      {!gameStarted && <StartGameModal />}
      <PlaceHolder />
      <Playfield />
      <ScoreBoard />
    </AppContainer>
  );
}

export default Tetris;
