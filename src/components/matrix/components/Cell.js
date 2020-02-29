import React from 'react';
import styled from 'styled-components';

export const Cell = props => {
  return (
    <Container
      isLocked={props.isLocked}
      isActive={props.isActive}
    >
      <span>{`(${props.coordinate.x}, ${props.coordinate
        .y})`}</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 5%;
  border: 1px solid white;
  background-color: ${props =>
    props.isLocked || props.isActive
      ? 'black'
      : 'lightgrey'};

  color: ${props =>
    props.isLocked || props.isActive ? 'white' : 'black'};
`;
