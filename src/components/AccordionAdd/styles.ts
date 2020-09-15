import styled, { css } from 'styled-components';

interface IContainerProps {
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px dashed #95989a;
  border-radius: 5px;

  > input {
    width: 100%;
    border: 0;
    background: transparent;
    color: #707070;

    &::placeholder {
      color: #cecece;
    }
  }

  > button {
    padding: 20px;
    background: transparent;
    border: 0;
  }

  ${props =>
    props.isFocused &&
    css`
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border: 1px solid #95989a;
      border-radius: 0;
    `}

  ${props =>
    props.isFilled &&
    css`
      border-top: 1px solid #95989a;
      border-radius: 0;
    `}
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid #95989a;
  border-bottom: 0;
  padding-left: 20px;

  > span {
    color: #969696;
  }

  > button {
    padding: 20px;
    background: transparent;
    border: 0;
  }
`;
