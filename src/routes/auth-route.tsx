import React, { useEffect } from 'react';
import { View } from 'react-native';
import store from '../store';

interface _Props {
  navigation: any;
}
const AuthRoute: React.FC<_Props> = ({ children, navigation }) => {
  const auth = store.useState((s) => s.token !== null);

  useEffect(() => {
    if (!auth) {
      navigation.reset({
        index: 1,
        routes: [{ name: 'home' }],
      });
    }
  }, [auth]);

  return auth ? <>{children}</> : <></>;
};

export default AuthRoute;
