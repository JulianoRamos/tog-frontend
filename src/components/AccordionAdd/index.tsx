import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';

import { v4 as uuidv4 } from 'uuid';

import { FiPlusCircle, FiCornerDownLeft, FiXCircle } from 'react-icons/fi';

import { useField } from '@unform/core';

import Input from '../Input';

import { Container, Item } from './styles';

interface IInputPros extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  clearField(): void;
  reset: boolean;
}

interface IData {
  id: string;
  name: string;
}

const AccordionAdd: React.FC<IInputPros> = ({
  name,
  clearField,
  reset,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [data, setData] = useState<IData[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleAddData = useCallback(() => {
    const newData = [
      ...data,
      { id: uuidv4(), name: inputRef.current?.value } as IData,
    ];
    setData(newData);
    clearField();
    inputRef.current?.focus();
  }, [data, clearField]);

  const handleRemoveData = useCallback(
    (id: string) => {
      const findIndex = data.findIndex(d => d.id === id);
      data.splice(findIndex, 1);

      setData([...data]);
    },
    [data],
  );

  useEffect(() => {
    setData([]);
  }, [reset]);

  return (
    <>
      {data.map((item, index) => (
        <Item key={item.id}>
          <Input
            disabled
            defaultValue={item.name}
            name={`items[${index}].name`}
            inputStyle={{ border: 0, padding: 0 }}
          />
          <button type="button" onClick={() => handleRemoveData(item.id)}>
            <FiXCircle size={20} color="#8D8D8D" />
          </button>
        </Item>
      ))}
      <Container isFilled={isFilled} isFocused={isFocused}>
        <button type="button" onClick={() => inputRef.current?.focus()}>
          <FiPlusCircle size={20} color="#8D8D8D" />
        </button>

        <input
          type="text"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        {(isFocused || isFilled) && (
          <button type="button" onClick={handleAddData}>
            <FiCornerDownLeft size={20} color="#107DAC" />
          </button>
        )}
      </Container>
    </>
  );
};

export default AccordionAdd;
