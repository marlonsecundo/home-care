import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Layout } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import AuthRoute from '../../routes/auth-route';
import {
  H2,
  Label,
  LineDivider,
  P1,
  Root,
  SafeArea,
} from '../../styles/global';
import {
  ColumnContainer,
  MarginBlockSmall,
  RowContainer,
} from '../../styles/layout';
import { User } from '../../types/models';

interface Props {}
const PatientScreen: React.FC<Props> = () => {
  const route = useRoute<RouteProp<{ user: User }, 'user'>>();
  const patient = route.params;

  return (
    <AuthRoute>
      <Root>
        <SafeArea>
          <ColumnContainer>
            <H2>{patient.profile?.name?.split(' ')[0]}</H2>
            <Label>{patient.email}</Label>
            <LineDivider></LineDivider>
            <Label>Nome</Label>
            <P1>{patient.profile?.name}</P1>

            <MarginBlockSmall></MarginBlockSmall>

            <RowContainer justifyContent="space-between">
              <Label>CPF</Label>
              <Label>Nascimento</Label>
            </RowContainer>
            <RowContainer>
              <P1>{patient.profile?.cpf}</P1>
              <P1>{patient.profile?.birth}</P1>
            </RowContainer>

            <LineDivider></LineDivider>
          </ColumnContainer>
        </SafeArea>
      </Root>
    </AuthRoute>
  );
};

export default PatientScreen;
