import { StackNavigationProp } from '@react-navigation/stack';
import { Button, List } from '@ui-kitten/components';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Toast from 'react-native-toast-message';
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
  const firstTime = useRef(true);

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
      if (result._type === 'ListResult') {
        setPatients(result);
      } else {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: result.message,
          visibilityTime: 4000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
          onHide: () => {},
        });
      }
    });
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (!firstTime.current) {
        fetchPatients();
      }

      firstTime.current = false;
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

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
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeArea>
      </Root>
    </AuthRoute>
  );
};

export default NeurologistPatientsScreen;
