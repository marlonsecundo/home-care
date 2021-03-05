import { Layout } from '@ui-kitten/components';
import React from 'react';
import { H6, H2 } from '../../styles/global';
import { StyledCard } from './styles';

interface _Props {
  text: string;
  onPress: () => void;
}

const Header = () => <Layout></Layout>;

const CardButton: React.FC<_Props> = ({ text, onPress }) => {
  return (
    <StyledCard status="info" onPress={onPress} header={Header}>
      <H6>{text}</H6>
    </StyledCard>
  );
};

export default CardButton;
