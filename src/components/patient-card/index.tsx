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
import StringMask from 'string-mask';
interface _Props {
  patient: User;
  onTap: () => void;
}

const cpfFormatter = new StringMask('000.000.000-00');

const PatientCard: React.FC<_Props> = ({ patient, onTap }) => {
  const cpfDisplay = cpfFormatter.apply(patient.profile?.cpf);

  return (
    <_StyledCard onPress={onTap}>
      <RowContainer alignItems="center">
        <ColumnContainer flex={1}>
          <Label>Nome</Label>
          <P1>{patient.profile?.name}</P1>
          <MarginBlockSmall></MarginBlockSmall>

          <RowContainer flex={1} justifyContent="space-between">
            <Label>CPF</Label>
            <Label>Nascimento</Label>
          </RowContainer>
          <RowContainer justifyContent="space-between">
            <P1>{cpfDisplay}</P1>
            <P1>{patient.profile?.birth}</P1>
          </RowContainer>
        </ColumnContainer>
      </RowContainer>
    </_StyledCard>
  );
};

export default PatientCard;
