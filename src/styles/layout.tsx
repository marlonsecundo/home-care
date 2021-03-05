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
  flex?: number;
  alignItems?: string;
}

export const RowContainer = styled(Layout)<RowContainerProps>`
  flex-flow: row;
  ${(props) => (props.flex ? `flex: ${props.flex}` : '')};
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ''};

  ${(props) =>
    props.justifyContent ? `align-items: ${props.alignItems}` : ''};
`;

export const MarginBlockSmall = styled(Layout)`
  margin: 4px;
`;
