import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import LazyComponent from '../../hoc/lazy-component';
import { NeurologistService } from '../../services/neurologists';
import { P1 } from '../../styles/global';
import { ColumnContainer } from '../../styles/layout';
import { User } from '../../types/models';
import Selector, { SelectorItem } from '../selector';

interface Props {
  onNeurologistSelected: (item: SelectorItem) => void;
}

const NeurologistSelector: React.FC<Props> = ({ onNeurologistSelected }) => {
  const [neurologists, setNeurologists] = useState<User[] | null>(null);

  const [itens, setItens] = useState<SelectorItem[]>([
    { id: '', name: '', value: {} },
  ]);

  useEffect(() => {
    NeurologistService.fetchNeurologists().then((result) => {
      if (result !== null) {
        setNeurologists(result);

        const values = result.map<SelectorItem>((n) => ({
          id: n.id?.toString() ?? '',
          name: n.profile?.name ?? '',
          value: n,
        }));

        setItens(values);
      }
    });
  }, []);

  return (
    <LazyComponent loading={neurologists === null}>
      <Selector
        label="Neurologista"
        onItemSelected={onNeurologistSelected}
        itens={itens}
      ></Selector>
    </LazyComponent>
  );
};

export default NeurologistSelector;
