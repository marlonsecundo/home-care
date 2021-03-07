import { Button, Spinner } from '@ui-kitten/components';
import React, { useState } from 'react';
import { View } from 'react-native';
import store from '../../store';
import { PatientLog, RoleTypes, User } from '../../types/models';

import NeurologistService from '../../services/neurologist.service';
import {
  ColumnContainer,
  MarginBlockSmall,
  Padding,
  RowContainer,
} from '../../styles/layout';
import { H6 } from '../../styles/global';
import LazyComponent from '../../hoc/lazy-component';
import useInterventionListener from '../../hooks/useInterventionListener';

interface Props {
  patient: User;
}

const InterventionButton: React.FC<Props> = ({ patient }) => {
  const [loading, setLoading] = useState(false);

  const intervention = useInterventionListener(
    patient.profile?.intervention ?? false,
    patient.id ?? -1
  );

  const requestIntervention = () => {
    setLoading(true);

    NeurologistService.updateIntervention(patient, true).then((result) => {
      setLoading(false);
    });
  };

  const completeIntervention = () => {
    setLoading(true);

    NeurologistService.updateIntervention(patient, false).then((result) => {
      setLoading(false);
    });
  };

  return (
    <LazyComponent loading={loading}>
      <ColumnContainer>
        {!intervention ? (
          <RowContainer justifyContent="center" alignItems="center">
            <H6 status="warning">Intervenção Pendente!</H6>
          </RowContainer>
        ) : (
          <></>
        )}
        <Button
          onPress={intervention ? completeIntervention : requestIntervention}
        >
          {intervention ? 'Requisitar Intervenção' : 'Finalizar Intervenção!'}
        </Button>
      </ColumnContainer>
    </LazyComponent>
  );
};

const InterventionSection: React.FC<Props> = ({ patient }) => {
  const user = store.useState((s) => s.user);

  if (user.role?.type !== RoleTypes.PATIENT) {
    return (
      <ColumnContainer>
        <MarginBlockSmall></MarginBlockSmall>
        <InterventionButton patient={patient}></InterventionButton>
      </ColumnContainer>
    );
  }

  return <View />;
};

export default InterventionSection;
