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

        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  )
}