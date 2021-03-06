import React, { useState } from 'react';
import Selector, { SelectorItem } from '../selector';

interface Props {
  onConditionSelected: (item: SelectorItem) => void;
}

const ConditionSelector: React.FC<Props> = ({ onConditionSelected }) => {
  const [itens] = useState<SelectorItem[]>([
    { id: '0', name: 'Normal', value: 0 },
    { id: '1', name: 'Leve', value: 1 },
    { id: '2', name: 'Grave', value: 2 },
    { id: '3', name: 'Aleatório', value: 3 },
  ]);

  return (
    <Selector
      label="Condição"
      onItemSelected={onConditionSelected}
      itens={itens}
    ></Selector>
  );
};

export default ConditionSelector;
