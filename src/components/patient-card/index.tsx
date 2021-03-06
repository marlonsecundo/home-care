import { Icon } from '@ui-kitten/components';
import React from 'react';
import { Label, P1 } from '../../styles/global';
import {
  ColumnContainer,
  MarginBlockSmall,
  RowContainer,
} from '../../styles/layout';
import { User } from '../../types/models';
import { _PatientIcon, _StyledCard } from './styles';

interface _Props {
  patient: User;
  onTap: () => void;
}

const PatientCard: React.FC<_Props> = ({ patient, onTap }) => {
  return (
    <_StyledCard onPress={onTap}>
      <RowContainer alignItems="center">
        <ColumnContainer>
          <Label>Nome</Label>
          <P1>{patient.profile?.name}</P1>
          <MarginBlockSmall></MarginBlockSmall>

          <RowContainer flex={1} justifyContent="space-between">
            <Label>CPF</Label>
            <Label>Nascimento</Label>
          </RowContainer>
          <RowContainer justifyContent="space-between">
            <P1>{patient.profile?.cpf}</P1>
            <P1>{patient.profile?.birth}</P1>
          </RowContainer>
        </ColumnContainer>
      </RowContainer>
    </_StyledCard>
  );
};

export default PatientCard;
