import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Matrix } from './components';
import StartGameModal from './components/modals/StartGameModal';

function App() {
  const gameStarted = useSelector(
    state => state.game.started
  );

  return (
    <Container>
      {!gameStarted && <StartGameModal />}
      <PlaceHolder />
      <Matrix />
      <PlaceHolder />
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100vw;
  height: 56.25vw;
  max-width: 177.78vh; /* 16:9 aspect ratio */
  max-height: 100vh;
  margin: auto;

  background-color: #c0c0c0;
`;

const PlaceHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100vw;
  height: 56.25vw;
  max-width: calc(100% / 3);
  max-height: 100vh;
  margin: auto;

  flex-grow: 1;

  background-color: #a0d0df;
`;

export default App;
