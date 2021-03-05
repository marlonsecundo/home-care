import { StackNavigationProp } from '@react-navigation/stack';
import { List } from '@ui-kitten/components';
import React, { useCallback, useEffect, useState } from 'react';
import PatientCard from '../../components/patient-card';
import LazyComponent from '../../hoc/lazy-component';
import AuthRoute from '../../routes/auth-route';
import { NeurologistService } from '../../services/neurologists';
import store from '../../store';
import { H2, Root, SafeArea } from '../../styles/global';
import { User } from '../../types/models';

interface Props {
  navigation: StackNavigationProp<any>;
}

const NeurologistPatientsScreen: React.FC<Props> = ({ navigation }) => {
  const neurologist = store.useState((s) => s.user);

  const [patients, setPatients] = useState<User[]>();

  useEffect(() => {
    NeurologistService.fetchPatients(neurologist).then((result) => {
      if (result !== null) {
        setPatients(result);
      }
    });
  }, []);

  const renderItem = useCallback((data) => {
    return <PatientCard patient={data.item}></PatientCard>;
  }, []);

  return (
    <AuthRoute navigation={navigation}>
      <Root>
        <SafeArea>
          <LazyComponent loading={patients === null}>
            <H2>Pacientes</H2>
            <List data={patients} renderItem={renderItem} />
          </LazyComponent>
        </SafeArea>
      </Root>
    </AuthRoute>
  );
};

export default NeurologistPatientsScreen;
