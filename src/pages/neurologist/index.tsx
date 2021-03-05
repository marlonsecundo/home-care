import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import CardButton from '../../components/card-button';
import AuthRoute from '../../routes/auth-route';
import store from '../../store';
import { Root, SafeArea, H2, WrapContainer } from '../../styles/global';

interface _Props {
  navigation: StackNavigationProp<any>;
}
const NeurologistScreen: React.FC<_Props> = ({ navigation }) => {
  return (
    <AuthRoute navigation={navigation}>
      <Root>
        <SafeArea>
          <H2>Neurologista</H2>
          <WrapContainer>
            <CardButton
              onPress={() => navigation.navigate('neurologist-patients')}
              text="Pacientes"
            ></CardButton>
          </WrapContainer>
        </SafeArea>
      </Root>
    </AuthRoute>
  );
};

export default NeurologistScreen;
