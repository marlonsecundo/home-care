import React from 'react';
import { Container, LoginButton, Title } from './styles';

import { Layout, Text } from '@ui-kitten/components';

const HomeScreen: React.FC = ({ navigation }: any) => (
  <Container>
    <Title category="h2">Home Care</Title>
    <LoginButton onPress={() => navigation.push('login')}> Login </LoginButton>
    <LoginButton onPress={() => navigation.push('signup')}>
      Cadastro
    </LoginButton>
  </Container>
);

export default HomeScreen;
