import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Icon } from '@ui-kitten/components';
import React, { useCallback } from 'react';
import store from '../../store';
import { AuthActions } from '../../store/actions/auth.actions';

const ExitIcon = (props: any) => (
  <Icon {...props} name="corner-down-left-outline" />
);

interface Props {
  navigation: StackNavigationProp<any>;
}

const LogoutButton: React.FC<Props> = ({ navigation }) => {
  const onLogoutTap = useCallback(() => {
    store.update(AuthActions.logoff());
  }, []);

  return (
    <Button appearance="ghost" onPress={onLogoutTap} accessoryRight={ExitIcon}>
      Sair
    </Button>
  );
};

export default LogoutButton;
