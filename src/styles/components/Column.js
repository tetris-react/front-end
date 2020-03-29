import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 56.25vw;
  max-width: calc(100% / 3);
  max-height: 100vh;
  margin: auto;
  background-color: #212121;
  border-right: 1px solid black;
  border-left: 1px solid black;
`;

export default Column;
