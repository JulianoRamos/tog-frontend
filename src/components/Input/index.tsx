import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { useField } from '@unform/core';
import { Container, Label, Error } from './styles';

interface IInputPros extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  inputStyle?: object;
}

const Input: React.FC<IInputPros> = ({ label, name, inputStyle, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error}>
      {label && <Label>{label}</Label>}
      <input
        style={inputStyle}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Input;
