import styled from 'styled-components';
import { Column } from '../../../styles';

export const ScoreBoardContainer = styled(Column)`
  align-items: flex-end;
  padding: 40px;
  
  font-size: 3.0rem;
  color: #CCCCCC;

  section {
    display:flex;
    flex-direction: column;

    width: 95%;

    div {
      display:flex;
      justify-content: space-between;
      margin: 10px 0px;
    }

    hr {
      width: 105%;
      margin-left: -28px;
    }
  }

  section:first-of-type {
    width: 100%;

    color: #FAFAFA;

    div {
      margin: 20px 0;
    }

    hr {
      width: 100%;
      margin: 0px;
    }
  }

  section:last-of-type {
    font-size: 2.0rem;
    width: 95%;
  }
  

  
`;
