import { Layout } from '@ui-kitten/components';
import styled from 'styled-components/native';

export const Center = styled(Layout)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface ContainerProps {
  justifyContent?: string;
  flex?: number;
  alignItems?: string;
}

export const ColumnContainer = styled(Layout)<ContainerProps>`
  flex-flow: column;
  ${(props) => (props.flex ? `flex: ${props.flex}` : '')};
`;

export const RowContainer = styled(Layout)<ContainerProps>`
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

interface PaddingProps {
  padding?: string;
}

export const Padding = styled(Layout)<PaddingProps>`
  ${(props) => (props.padding ? `padding: ${props.padding}` : '')};
`;
