import styled, { css } from 'styled-components';

interface IContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  > input {
    height: 39px;
    background: transparent;
    border-radius: 8px;
    border: 1px solid #292929;

    padding: 10px 16px;

    font-size: 14px;
    color: #404040;
    font-family: 'Futura';
  }

  ${props =>
    props.isErrored &&
    css`
      > input {
        border: 1px solid #c53030;
      }
    `}
`;

export const Label = styled.span`
  color: #8d8d8d;
  font-size: 12px;
  font-family: 'Futura';

  margin-bottom: 8px;
`;

export const Error = styled.span`
  color: #c53030;
  font-size: 14px;
  font-weight: 300;

  margin-top: 5px;
`;
