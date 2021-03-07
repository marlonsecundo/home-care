import { ApplicationProvider, Layout } from '@ui-kitten/components';
import React from 'react';
import { H4, H6, LineDivider, P1 } from '../../styles/global';
import { ColumnContainer, RowContainer } from '../../styles/layout';
import { PatientLog, PatientLogType, Status } from '../../types/models';
import { _StyledCard } from './styles';

interface Props {
  patientLog: PatientLog;
}

const PatientLogCard: React.FC<Props> = ({ patientLog }) => {
  let textData = '';
  let status = 'basic';
  let statusDisplay = '';

  if (patientLog.status === Status.LOW) {
    status = 'warning';
    statusDisplay = 'Normal';
  } else if (patientLog.status === Status.MODERATE) {
    status = 'success';
    statusDisplay = 'Moderado';
  } else if (patientLog.status === Status.SEVERE) {
    status = 'danger';
    statusDisplay = 'Severa';
  }

  if (patientLog.type === PatientLogType.OXYGENATION) {
    textData = patientLog.data + '% no sangue';
  } else {
    textData = patientLog.data + ' bpm';
  }
  return (
    <_StyledCard status={status}>
      <ColumnContainer>
        <H4>
          {patientLog.type === PatientLogType.OXYGENATION
            ? 'Oxigenação'
            : 'Batimentos'}
        </H4>
        <LineDivider></LineDivider>
        <H6>{textData}</H6>
        <RowContainer>
          <P1>Situação: </P1>
          <P1 status={status}>{statusDisplay}</P1>
        </RowContainer>
      </ColumnContainer>
    </_StyledCard>
  );
};

export default PatientLogCard;
