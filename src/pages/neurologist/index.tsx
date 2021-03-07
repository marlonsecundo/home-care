import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback } from 'react';
import CardButton from '../../components/card-button';
import LogoutButton from '../../components/logout-button/logout-button';
import AuthRoute from '../../routes/auth-route';
import store from '../../store';
import { AuthActions } from '../../store/actions/auth.actions';
import { Root, SafeArea, H2, WrapContainer } from '../../styles/global';
import { RowContainer } from '../../styles/layout';

interface _Props {
  navigation: StackNavigationProp<any>;
}
const NeurologistScreen: React.FC<_Props> = ({ navigation }) => {
  return (
    <AuthRoute>
      <Root>
        <SafeArea>
          <RowContainer justifyContent="space-between">
            <H2>Neurologista</H2>
            <LogoutButton></LogoutButton>
          </RowContainer>
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
