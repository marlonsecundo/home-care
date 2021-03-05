import React, { useEffect } from 'react';
import store from '../store';

interface _Props {
  navigation: any;
}
const AuthRoute: React.FC<_Props> = ({ children, navigation }) => {
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
