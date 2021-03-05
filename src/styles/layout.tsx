import { Layout } from '@ui-kitten/components';
import styled from 'styled-components/native';

export const Center = styled(Layout)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ColumnContainer = styled(Layout)`
  flex-flow: column;
  flex: 1;
`;

interface RowContainerProps {
  justifyContent?: string;
}

export const RowContainer = styled(Layout)<RowContainerProps>`
  flex-flow: row;
  flex: 1;
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ''}
`;

export const MarginBlockSmall = styled(Layout)`
  margin: 4px;
`;
