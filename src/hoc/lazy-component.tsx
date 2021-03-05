import { Layout, Spinner } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { Center } from '../styles/layout';

interface _Props {
  loading: boolean;
}

const LazyComponent: React.FC<_Props> = ({ loading, children }) => {
  return loading ? (
    <Center>
      <Spinner size="giant" />
    </Center>
  ) : (
    <>{children}</>
  );
};

export default LazyComponent;
