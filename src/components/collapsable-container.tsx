import { Layout } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';

interface _Props {
  visible: boolean;
}
const CollapsableContainer: React.FC<_Props> = ({ visible, children }) => {
  return visible ? <Layout>{children}</Layout> : <></>;
};

export default CollapsableContainer;
