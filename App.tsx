import * as React from 'react';
import { AppRegistry } from 'react-native';
import Routes from './src/routes';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import * as eva from '@eva-design/eva';
import { useEffect } from 'react';

export default function Main() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Routes></Routes>
      </ApplicationProvider>
    </>
  );
}

AppRegistry.registerComponent('Home Care', () => Main);
