import React, { useState } from 'react';
import { Modal } from 'react-native';

import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import { Container, Header, Title, Form, Fields, TransactionsType } from './styles';
import { useForm } from 'react-hook-form';


interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const {
    control,
    handleSubmit
  } = useForm();

  function handleRegister(form: FormData) {

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    }

    console.log(data);
  }

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm 
            name='name'
            control={control}
            placeholder='Nome' 
            />
          <InputForm 
            name='amount'
            control={control}
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

          <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields> 

        <Button title='Enviar' onPress={handleSubmit(handleRegister)} />
      </Form>

      <Modal visible={categoryModalOpen}>
 
      <CategorySelect
        category={category}
        setCategory={setCategory}
        closeSelectCategory={handleCloseSelectCategoryModal}
      />
      </Modal>
    </Container>
  )
}