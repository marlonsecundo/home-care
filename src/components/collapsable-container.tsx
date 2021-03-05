import { Layout } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';
import { ColumnContainer } from '../styles/layout';

interface _Props {
  visible: boolean;
}
const CollapsableContainer: React.FC<_Props> = ({ visible, children }) => {
  return visible ? <ColumnContainer>{children}</ColumnContainer> : <></>;
};

export default CollapsableContainer;
