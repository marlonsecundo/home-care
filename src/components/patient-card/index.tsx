import React from 'react';
import { P1 } from '../../styles/global';
import { ColumnContainer, RowContainer } from '../../styles/layout';
import { User } from '../../types/models';
import { _PatientIcon, _StyledCard } from './styles';

interface _Props {
  patient: User;
}

const PatientCard: React.FC<_Props> = ({ patient }) => {
  return (
    <_StyledCard>
      <RowContainer>
        <_PatientIcon></_PatientIcon>
        <ColumnContainer>
          <P1>{patient.profile?.name}</P1>
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
