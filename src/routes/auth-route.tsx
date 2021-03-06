import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import store from '../store';

const AuthRoute: React.FC = ({ children }) => {
  const navigation = useNavigation();
  const authenticated = store.useState((s) => s.token !== null);

  useEffect(() => {
    if (!authenticated) {
      navigation.reset({
        index: 1,
        routes: [{ name: 'home' }],
      });
    }
  }, [authenticated]);

  return authenticated ? <>{children}</> : <></>;
};

export default AuthRoute;
