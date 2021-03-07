import { useNavigation } from '@react-navigation/native';
import { Input } from '@ui-kitten/components';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';
import AuthService from '../../services/auth.service';
import store from '../../store';
import { AuthActions } from '../../store/actions/auth.actions';
import { BottomButton, H2, Root, SafeArea } from '../../styles/global';
import { Center } from '../../styles/layout';
import { DEFAULT_USER } from '../../types/default';
import { RoleTypes, User } from '../../types/models';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authenticated = store.useState((s) => s.token !== null);
  const user = store.useState((s) => s.user);

  const navigateByUser = useCallback((user: User) => {
    if (user.role?.type === RoleTypes.NEUROLOGIST) {
      navigation.reset({
        index: 1,
        routes: [{ name: 'neurologist' }],
      });
    } else if (user.role?.type === RoleTypes.CARER) {
      navigation.reset({
        index: 1,
        routes: [{ name: 'carer' }],
      });
    } else {
      navigation.reset({
        index: 1,
        routes: [{ name: 'patient', params: user }],
      });
    }
  }, []);

  const onLoginButtonTap = useCallback(async (em, pass) => {
    const result = await AuthService.login(em, pass);

    if (result._type === 'LoginResponse') {
      store.update(AuthActions.authenticate(result.token, result.user));
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
  }, []);

  useEffect(() => {
    if (user !== DEFAULT_USER && authenticated) navigateByUser(user);

    return () => {};
  }, [user, authenticated]);

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
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </SafeArea>
    </Root>
  );
};

export default LoginScreen;
