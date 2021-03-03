import { Input } from '@ui-kitten/components';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { AuthService } from '../../services/auth';
import store from '../../store';
import { AuthActions } from '../../store/actions/auth.actions';
import { BottomButton, H2, Root, SafeArea } from '../../styles/global';
import { Center } from '../../styles/layout';
import { RoleTypes } from '../../types/models';

const LoginScreen: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateByUser = useCallback((user: any) => {
    switch (user.role.type) {
      case RoleTypes[RoleTypes.NEUROLOGIST]:
        navigation.reset({
          index: 1,
          routes: [{ name: 'neurologist' }],
        });
        break;
    }
  }, []);

  const onLoginButtonTap = useCallback(async (em, pass) => {
    const result = await AuthService.login(em, pass);
    console.log(result);
    if (result.type === 'AXIOS_RESPONSE') {
      console.log('SADasd');
      store.update(AuthActions.authenticate(result.data.token), () => {
        navigateByUser(result.data.user);
      });
    }
  }, []);

  return (
    <Root>
      <SafeArea>
        <Center>
          <H2>Login</H2>
          <Input
            value={email}
            label="Email"
            placeholder="Insira seu email"
            onChangeText={setEmail}
          />
          <Input
            value={password}
            label="Senha"
            placeholder="Insira sua senha"
            secureTextEntry={true}
            onChangeText={setPassword}
          />

          <BottomButton onPress={() => onLoginButtonTap(email, password)}>
            Logar
          </BottomButton>
        </Center>
      </SafeArea>
    </Root>
  );
};

export default LoginScreen;
