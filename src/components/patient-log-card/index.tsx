import { ApplicationProvider, Layout } from '@ui-kitten/components';
import React from 'react';
import { H4, H6, LineDivider } from '../../styles/global';
import { ColumnContainer } from '../../styles/layout';
import { PatientLog, PatientLogType, Status } from '../../types/models';
import { _StyledCard } from './styles';

interface Props {
  patientLog: PatientLog;
}

const PatientLogCard: React.FC<Props> = ({ patientLog }) => {
  let textData = '';
  let status = 'basic';

  if (patientLog.status === Status.LOW) {
    status = 'warning';
  } else if (patientLog.status === Status.MODERATE) {
    status = 'success';
  } else if (patientLog.status === Status.SEVERE) {
    status = 'danger';
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
      </ColumnContainer>
    </_StyledCard>
  );
};

export default PatientLogCard;
