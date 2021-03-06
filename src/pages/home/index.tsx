import React, { useEffect } from 'react';
import { Container, LoginButton, Title } from './styles';

const HomeScreen: React.FC = ({ navigation }: any) => {
  return (
    <Container>
      <Title category="h2">Home Care</Title>
      <LoginButton onPress={() => navigation.push('login')}>Login</LoginButton>
      <LoginButton onPress={() => navigation.push('signup')}>
        Cadastro
      </LoginButton>
    </Container>
  );
};

export default HomeScreen;
