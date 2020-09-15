import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IContainerProps {
  isPrimary: boolean;
}

export const Container = styled.button<IContainerProps>`
  background: transparent;
  border-radius: 35px;
  border: 0;
  padding: 8px 64px;
  color: #969696;
  font-weight: 500;
  transition: background-color 0.2s;
  font-family: 'HurmeGeometricSans3-Bold', 'Roboto';

  &:hover {
    background: ${shade(0.2, '#FFFFFF')};
  }

  ${props =>
    props.isPrimary &&
    css`
      background: #ffa700;
      color: #ffffff;
    `}

  ${props =>
    props.isPrimary &&
    css`
      &:hover {
        background: ${shade(0.2, '#ffa700')};
      }
    `}
`;
