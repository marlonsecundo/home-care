import styled from 'styled-components/native';
import {
  Radio,
  Text,
  RadioGroup,
  Input,
  Divider,
  Button,
  Layout,
} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

export const P1 = styled(Text).attrs(() => ({
  category: 'p1',
}))`
  margin: 0 0 0 0;
`;

export const H2 = styled(Text).attrs(() => ({
  category: 'h2',
}))`
  margin: 0 0 15px 0;
`;

export const Label = styled(Text).attrs(() => ({
  category: 'label',
  appearance: 'hint',
}))`
  margin: 0px;
`;

export const H6 = styled(Text).attrs(() => ({
  category: 'h6',
}))`
  margin: 0 0 10px 0;
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  flex-flow: column;
  padding: 0 20px;
`;

export const LineDivider = styled(Divider)`
  margin: 15px 0px;
`;

export const BottomButton = styled(Button)`
  width: 100%;
  margin: 15px 0 10px 0;
`;

export const Root = styled(Layout)`
  flex: 1;
`;

export const WrapContainer = styled(Layout)`
  flex: 1;
  flex-flow: row wrap;
  justify-content: space-between;
`;
// export const StyledScrollView = styled(Scroll)
