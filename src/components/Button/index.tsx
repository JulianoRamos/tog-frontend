import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonPros = ButtonHTMLAttributes<HTMLButtonElement> & {
  isPrimary?: boolean;
};

const Button: React.FC<ButtonPros> = ({ children, isPrimary, ...rest }) => (
  <Container isPrimary={!!isPrimary} type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
