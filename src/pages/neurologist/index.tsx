import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import AuthRoute from '../../routes/auth-route';
import { Root, SafeArea, H2 } from '../../styles/global';

interface _Props {
  navigation: any;
}
const NeurologistScreen: React.FC<_Props> = ({ navigation }) => {
  return (
    <AuthRoute navigation={navigation}>
      <Root>
        <SafeArea>
          <H2>Neurologista</H2>
        </SafeArea>
      </Root>
    </AuthRoute>
  );
};

export default NeurologistScreen;
