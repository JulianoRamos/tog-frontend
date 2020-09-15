import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;

  padding: 39px 49px;
  min-width: 700px;
`;

export const Title = styled.h3`
  font-size: 16px;
  color: #1b3949;
`;

export const InputGroup = styled.div`
  display: flex;

  margin: 32px 0;

  > div:first-child {
    margin-right: 8px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;

  margin-top: 32px;
  margin-bottom: 16px;

  > button:first-child {
    margin-right: 8px;
  }
`;
