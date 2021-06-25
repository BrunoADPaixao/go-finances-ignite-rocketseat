import React, { useState } from 'react'

import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';

import { Container, Header, Title, Form, Fields, TransactionsType } from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input 
            placeholder='Nome' 
          />
          <Input 
            placeholder='Preco' 
          />

          <TransactionsType>

            <TransactionTypeButton 
              title='Income' 
              type='up' 
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
              title='Outcome' 
              type='down'
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsType>
        </Fields> 

        <Button title='Enviar' />
      </Form>

    </Container>
  )
}