import { StackNavigationProp } from '@react-navigation/stack';
import { Button, List } from '@ui-kitten/components';
import React, { useCallback, useEffect, useState } from 'react';
import PatientCard from '../../components/patient-card';
import LazyComponent from '../../hoc/lazy-component';
import AuthRoute from '../../routes/auth-route';
import NeurologistService from '../../services/neurologist.service';
import store from '../../store';
import { H2, Root, SafeArea } from '../../styles/global';
import { MarginBlockSmall, RowContainer } from '../../styles/layout';
import { User } from '../../types/models';

interface Props {
  navigation: StackNavigationProp<any>;
}

const NeurologistPatientsScreen: React.FC<Props> = ({ navigation }) => {
  const neurologist = store.useState((s) => s.user);

  const [patients, setPatients] = useState<User[] | null>();

  const onTapPatientCard = (patient: User) => {
    navigation.navigate('patient', patient);
  };

  const renderItem = useCallback((data) => {
    return (
      <PatientCard
        onTap={() => onTapPatientCard(data.item)}
        key={data.item.id}
        patient={data.item}
      ></PatientCard>
    );
  }, []);

  const fetchPatients = useCallback(() => {
    setPatients(null);

    NeurologistService.fetchPatients(neurologist).then((result) => {
      if (result !== null) {
        setPatients(result);
      }
    });
  }, []);

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <AuthRoute>
      <Root>
        <SafeArea>
          <LazyComponent loading={patients === null}>
            <RowContainer justifyContent="space-between">
              <H2>Pacientes</H2>
              <Button onPress={fetchPatients} appearance="ghost">
                Atualizar
              </Button>
            </RowContainer>
            <List data={patients} renderItem={renderItem} />
            <MarginBlockSmall></MarginBlockSmall>
          </LazyComponent>
        </SafeArea>
      </Root>
    </AuthRoute>
  );
};

export default NeurologistPatientsScreen;
