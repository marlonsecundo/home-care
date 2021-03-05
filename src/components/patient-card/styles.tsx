import { Card, Icon, Layout } from '@ui-kitten/components';
import styled from 'styled-components/native';

export const _StyledCard = styled(Card).attrs(() => ({
  status: 'basic',
}))`
  margin-bottom: 10px;
`;

export const _PatientIcon = styled(Icon).attrs(() => ({
  name: 'person',
  fill: 'white',
}))`
  width: 32px;
  height: 32px;
  margin: 0px;
  padding: 0px;
`;
