import { Radio, Input } from '@ui-kitten/components';
import React, { useCallback, useState } from 'react';
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
import AuthService from '../../services/auth.service';
import NeurologistSelector from '../../components/neurologist-selector';
import CarerSelector from '../../components/carer-selector';
import { ColumnContainer, MarginBlockSmall } from '../../styles/layout';
import ConditionSelector from '../../components/condition-selector';
import StringMask from 'string-mask';
import { Profile, Role, User } from '../../types/models';

const cpfFormatter = new StringMask('000.000.000-00');
const dateFromatter = new StringMask('90/90/9900');

const SignupScreen: React.FC = ({ navigation }: any) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [name, setName] = useState('');
  const [condition, setCondition] = useState(4);

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
      carer,
      condition
    ) => {
      const result = await AuthService.signup(
        { email, password } as User,
        {
          name,
          birth,
          crm,
          cpf,
          condition,
          intervention: false,
        } as Profile,
        { type: roleIndex } as Role,
        neurologist,
        carer
      );

      if (result._type === 'User') {
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Cadastro realizado!',
          visibilityTime: 3000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
        return;
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
    },
    []
  );

  return (
    <Root>
      <SafeArea>
        <ScrollView>
          <ColumnContainer>
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
              onChangeText={(text) => setName(text)}
            />
            <Input
              value={cpf}
              label="CPF"
              placeholder="Insira seu CPF"
              onChangeText={(text) => {
                if (text.length < cpf.length) {
                  setCPF(text);
                  return;
                }
                const data = text
                  .split(',')
                  .join('')
                  .split('.')
                  .join('')
                  .split('-')
                  .join('');

                const result: string = cpfFormatter.apply(data);

                setCPF(result);
              }}
            />
            <Input
              value={birth}
              label="Data de Nascimento"
              placeholder="Insira sua data de nascimento"
              onChangeText={(text) => {
                if (text.length < birth.length) {
                  setBirth(text);
                  return;
                }

                const data = text.split('/').join('');

                const result: string = dateFromatter.apply(data);

                setBirth(result);
              }}
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
              <LineDivider></LineDivider>
              <NeurologistSelector
                onNeurologistSelected={(item) => {
                  setNeurologist(item.value);
                }}
              ></NeurologistSelector>
            </CollapsableContainer>

            <CollapsableContainer visible={roleIndex === 2}>
              <MarginBlockSmall></MarginBlockSmall>
              <CarerSelector
                onCarerSelected={(item) => {
                  setCarer(item.value);
                }}
              ></CarerSelector>
            </CollapsableContainer>

            <CollapsableContainer visible={roleIndex === 2}>
              <MarginBlockSmall></MarginBlockSmall>
              <ConditionSelector
                onConditionSelected={(item) => {
                  setCondition(item.value);
                }}
              ></ConditionSelector>
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
                  carer,
                  condition
                )
              }
            >
              Cadastrar
            </BottomButton>
          </ColumnContainer>
        </ScrollView>
      </SafeArea>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Root>
  );
};

export default SignupScreen;
