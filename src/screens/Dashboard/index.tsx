import React from 'react';
import { HighlightCard } from '../../components/HighlightCard'
import { Container, Header, UserWrapper, UserInfo, User, Photo, UserGreeting, UserName, Icon, HighlightCards } from './styles';

export function Dashboard({ }) {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/42819535?v=4' }} />
            <User>
              <UserGreeting>Ola, </UserGreeting>
              <UserName>Rodrigo</UserName>
            </User>
          </UserInfo>

          <Icon name='power' />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
          type='up'
        />
        <HighlightCard
          title='Saidas'
          amount='R$ 1.259,00'
          lastTransaction='Última entrada dia 03 de abril'
          type='down'
        />
        <HighlightCard
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 a 16 de abril'
          type='total'
        />
      </HighlightCards>
    </Container>
  )
}