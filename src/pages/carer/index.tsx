import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import CardButton from '../../components/card-button';
import LogoutButton from '../../components/logout-button/logout-button';
import LazyComponent from '../../hoc/lazy-component';
import AuthRoute from '../../routes/auth-route';
import carerSerivce from '../../services/carer.serivce';
import store from '../../store';
import {
  Root,
  SafeArea,
  H2,
  WrapContainer,
  LineDivider,
  H4,
  Label,
} from '../../styles/global';
import { RowContainer } from '../../styles/layout';
import { User } from '../../types/models';

interface _Props {
  navigation: StackNavigationProp<any>;
}
const NeurologistScreen: React.FC<_Props> = ({ navigation }) => {
  const user = store.useState((s) => s.user);
  const [patient, setPatient] = useState<User | null>(null);

  useEffect(() => {
    carerSerivce.fetchPatient(user).then((result) => {
      if (result._type === 'User') {
        setPatient(result);
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

  return (
    <AuthRoute>
      <Root>
        <SafeArea>
          <RowContainer justifyContent="space-between">
            <H2>Cuidador</H2>
            <LogoutButton></LogoutButton>
          </RowContainer>

          <LineDivider></LineDivider>
          <H4>{user.profile?.name}</H4>
          <Label>{user.email}</Label>
          <LineDivider></LineDivider>

          <LazyComponent loading={patient === null}>
            <WrapContainer>
              <CardButton
                onPress={() => navigation.navigate('patient', patient)}
                text="Ver Paciente"
              ></CardButton>
            </WrapContainer>
          </LazyComponent>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeArea>
      </Root>
    </AuthRoute>
  );
};

export default NeurologistScreen;
