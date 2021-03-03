import styled from 'styled-components/native';
import { Button, Layout, Text } from '@ui-kitten/components';

export const Container = styled(Layout)`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

export const LoginButton = styled(Button)`
  margin: 0 0 15px 0;
  width: 150px;
`;

export const Title = styled(Text)`
  margin: 0 0 30px 0;
`;
