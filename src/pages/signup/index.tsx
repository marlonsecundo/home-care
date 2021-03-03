import { Radio, Input } from '@ui-kitten/components';
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {
  BottomButton,
  H2,
  H6,
  LineDivider,
  Root,
  SafeArea,
} from '../../styles/global';

import { RoleRadio } from './styles';
import Toast from 'react-native-toast-message';
import CollapsableContainer from '../../components/collapsable-container';
import { RoleTypes } from '../../types/models';
import { AuthService } from '../../services/auth';

const SignupScreen: React.FC = ({ navigation }: any) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [crm, setCRM] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupButtonTap = useCallback(
    async (email, password, name, birth, crm, cpf, roleIndex) => {
      const result = await AuthService.signup(
        { email, password },
        { name, birth, crm, cpf },
        { type: roleIndex }
      );

      if (result.type === 'AXIOS_RESPONSE') {
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Cadastro realizado!',
          visibilityTime: 3000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
          onHide: () => navigation.replace('login'),
        });
        return;
      }

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
    },
    []
  );

  return (
    <Root>
      <SafeArea>
        <ScrollView>
          <H2>Cadastro</H2>
          <H6>Tipo de Cadastro</H6>
          <RoleRadio
            selectedIndex={roleIndex}
            onChange={(index) => setRoleIndex(index)}
          >
            <Radio>Cuidador</Radio>
            <Radio>Médico</Radio>
            <Radio>Paciente</Radio>
          </RoleRadio>
          <LineDivider></LineDivider>
          <H6>Perfil</H6>
          <Input
            value={name}
            label="Nome"
            placeholder="Insira seu nome"
            onChangeText={setName}
          />
          <Input
            value={cpf}
            label="CPF"
            placeholder="Insira seu CPF"
            onChangeText={setCPF}
          />
          <Input
            value={birth}
            label="Data de Nascimento"
            placeholder="Insira sua data de nascimento"
            onChangeText={setBirth}
          />
          <CollapsableContainer visible={roleIndex === 1}>
            <>
              <LineDivider></LineDivider>
              <Input
                value={crm}
                label="CRM"
                placeholder="Insira seu CRM"
                onChangeText={setCRM}
              />
            </>
          </CollapsableContainer>
          <LineDivider></LineDivider>
          <H6>Usuario</H6>
          <Input
            value={email}
            label="Email"
            placeholder="Insira seu email"
            onChangeText={setEmail}
          />
          <Input
            value={password}
            label="Senha"
            placeholder="Defina uma senha"
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <BottomButton
            onPress={() =>
              signupButtonTap(email, password, name, birth, crm, cpf, roleIndex)
            }
          >
            Cadastrar
          </BottomButton>
        </ScrollView>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </SafeArea>
    </Root>
  );
};

export default SignupScreen;
