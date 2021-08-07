import React, { useState } from 'react';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';

import { Container, Header, Title, Form, Fields, TransactionsType } from './styles';


interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Nome é obrigatório'),
  amount: Yup
    .number()
    .typeError('Informe um valor numerico')
    .positive('O valor nao pode ser negativo')
    .required('O valor é obrigatório')
})

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm( {resolver: yupResolver(schema)});

  function handleRegister(form: FormData) {
    if (!transactionType)
      return Alert.alert('Selecione o tipo de transacao!');

      if (category.key === 'category')
        return Alert.alert('Selecione a categoria!')

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                autoCapitalize='sentences'
                autoCorrect={false}
                error={errors.name && errors.name.message}
                />
              <InputForm 
                name='amount'
                control={control}
                placeholder='Preco' 
                keyboardType='numeric'
                error={errors.amount && errors.amount.message}
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

            <Button title='Enviar' onPress={() => handleSubmit(handleRegister)} />
          </Form>

          <Modal visible={categoryModalOpen}>
    
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
          </Modal>
        </Container>
      </TouchableWithoutFeedback>
  )
}