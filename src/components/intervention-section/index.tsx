import { Button, Spinner } from '@ui-kitten/components';
import React, { useState } from 'react';
import { View } from 'react-native';
import store from '../../store';
import { PatientLog, RoleTypes, User } from '../../types/models';

import NeurologistService from '../../services/neurologist.service';

interface Props {
  patient: User;
}

const NeurologistButton: React.FC<Props> = ({ patient }) => {
  const user = store.useState((s) => s.user);

  const [intervention, setIntervention] = useState(
    patient.profile?.intervention
  );

  const requestIntervention = () => {
    setIntervention(true);

    NeurologistService.updateIntervention(user, patient, true);
  };

  return (
    <Button onPress={requestIntervention} disabled={intervention}>
      {!intervention ? 'Requisitar Intervenção' : 'Resquitado!'}
    </Button>
  );
};

const CarerButton: React.FC<Props> = ({ patient }) => {
  const user = store.useState((s) => s.user);

  const [intervention, setIntervention] = useState(
    patient.profile?.intervention
  );

  const completeIntervention = () => {
    setIntervention(false);

    NeurologistService.updateIntervention(user, patient, false);
  };

  return (
    <Button onPress={completeIntervention} disabled={!intervention}>
      {intervention ? 'Finalizar Intervenção' : 'Concluido!'}
    </Button>
  );
};

const InterventionSection: React.FC<Props> = ({ patient }) => {
  const user = store.useState((s) => s.user);

  if (user.role?.type === RoleTypes.NEUROLOGIST)
    return <NeurologistButton patient={patient}></NeurologistButton>;
  else if (user.role?.type === RoleTypes.CARER)
    return <CarerButton patient={patient}></CarerButton>;

  return <View />;
};

export default InterventionSection;
