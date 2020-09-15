import React, { useRef, useCallback, useState } from 'react';

import { FormHandles, Scope } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import AccordionAdd from '../../components/AccordionAdd';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

import { Container, Card, Title, InputGroup, ButtonGroup } from './styles';

interface IContact {
  contact: string;
  items: [];
}

interface IFormData {
  name: string;
  lastname: string;
  contacts: IContact;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [isResetContacts, setResetContacts] = useState(false);

  const handleClearFieldContact = useCallback(() => {
    formRef.current?.clearField('contacts.contact');
  }, []);

  const handleSubmit = useCallback(async (data: IFormData) => {
    try {
      formRef.current?.setErrors([]);

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        lastname: Yup.string().required('Sobrenome obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { name, lastname, contacts } = data;

      const formData = {
        name,
        lastname,
        contacts: contacts.items ? contacts.items : [],
      };

      await api.post('/users', formData);

      formRef.current?.reset();
      setResetContacts(state => !state);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  const handleReset = useCallback(() => {
    setResetContacts(state => !state);
  }, []);

  return (
    <Container>
      <Card>
        <Title>MEUS CONTATOS</Title>

        <Form ref={formRef} onSubmit={handleSubmit} onReset={handleReset}>
          <InputGroup>
            <Input label="Nome" name="name" />
            <Input label="Sobrenome" name="lastname" />
          </InputGroup>

          <Scope path="contacts">
            <AccordionAdd
              reset={isResetContacts}
              placeholder="Adicionar Contato (Telefone, email, twitter, facebook)"
              name="contact"
              clearField={handleClearFieldContact}
            />
          </Scope>

          <ButtonGroup>
            <Button isPrimary type="submit">
              Salvar
            </Button>
            <Button type="reset">Cancelar</Button>
          </ButtonGroup>
        </Form>
      </Card>
    </Container>
  );
};

export default Home;
