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
import { AuthService } from '../../services/auth';
import NeurologistSelector from '../../components/neurologist-selector';
import CarerSelector from '../../components/carer-selector';
import { MarginBlockSmall } from '../../styles/layout';
import PatientSelector from '../../components/patient-selector';

const SignupScreen: React.FC = ({ navigation }: any) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [crm, setCRM] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [neurologist, setNeurologist] = useState(null);
  const [carer, setCarer] = useState(null);

  const signupButtonTap = useCallback(
    async (
      email,
      password,
      name,
      birth,
      crm,
      cpf,
      roleIndex,
      neurologist,
      carer
    ) => {
      const result = await AuthService.signup(
        { email, password },
        { name, birth, crm, cpf },
        { type: roleIndex },
        neurologist,
        carer
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
          <CollapsableContainer visible={roleIndex === 2}>
            <>
              <LineDivider></LineDivider>
              <NeurologistSelector
                onNeurologistSelected={(item) => {
                  setNeurologist(item.value);
                }}
              ></NeurologistSelector>
              <MarginBlockSmall></MarginBlockSmall>
              <CarerSelector
                onCarerSelected={(item) => {
                  setCarer(item.value);
                }}
              ></CarerSelector>
            </>
          </CollapsableContainer>

          <BottomButton
            onPress={() =>
              signupButtonTap(
                email,
                password,
                name,
                birth,
                crm,
                cpf,
                roleIndex,
                neurologist,
                carer
              )
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
