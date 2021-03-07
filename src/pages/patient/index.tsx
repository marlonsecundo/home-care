import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { RoleTypes } from '../../../server/contracts/enums';
import InterventionSection from '../../components/intervention-section';
import LogoutButton from '../../components/logout-button/logout-button';
import PatientLogCard from '../../components/patient-log-card';
import usePatientLogListener from '../../hooks/usePatientLogListener';
import AuthRoute from '../../routes/auth-route';
import store from '../../store';
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
import { PatientLogType, User } from '../../types/models';

interface Props {}
const PatientScreen: React.FC<Props> = () => {
  const user = store.useState((s) => s.user);
  const route = useRoute<RouteProp<{ user: User }, 'user'>>();
  const patient = route.params;

  const patientOxiLog = usePatientLogListener(
    PatientLogType.OXYGENATION,
    patient.id ?? -1
  );

  const patientHeartLog = usePatientLogListener(
    PatientLogType.HEARTBEAT,
    patient.id ?? -1
  );

  return (
    <AuthRoute>
      <Root>
        <SafeArea>
          <ColumnContainer>
            <RowContainer justifyContent="space-between">
              <H2>{patient.profile?.name?.split(' ')[0]}</H2>
              {user.role?.type === RoleTypes.PATIENT ? (
                <LogoutButton></LogoutButton>
              ) : (
                <></>
              )}
            </RowContainer>

            <Label>{patient.email}</Label>
            <LineDivider></LineDivider>
            <Label>Nome</Label>
            <P1>{patient.profile?.name}</P1>
            <MarginBlockSmall></MarginBlockSmall>
            <RowContainer justifyContent="space-between">
              <Label>CPF</Label>
              <Label>Nascimento</Label>
            </RowContainer>
            <RowContainer justifyContent="space-between">
              <P1>{patient.profile?.cpf}</P1>
              <P1>{patient.profile?.birth}</P1>
            </RowContainer>
            <LineDivider></LineDivider>
            <PatientLogCard patientLog={patientOxiLog}></PatientLogCard>
            <PatientLogCard patientLog={patientHeartLog}></PatientLogCard>
            <LineDivider></LineDivider>
            <InterventionSection patient={patient}></InterventionSection>
          </ColumnContainer>
        </SafeArea>
      </Root>
    </AuthRoute>
  );
};

export default PatientScreen;
