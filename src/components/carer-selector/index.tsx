import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import LazyComponent from '../../hoc/lazy-component';
import { CarerService } from '../../services/carer.serivce';
import { NeurologistService } from '../../services/neurologists';
import { P1 } from '../../styles/global';
import { ColumnContainer } from '../../styles/layout';
import { User } from '../../types/models';
import Selector, { SelectorItem } from '../selector';

interface Props {
  onCarerSelected: (item: SelectorItem) => void;
}

const CarerSelector: React.FC<Props> = ({ onCarerSelected }) => {
  const [carers, setCarers] = useState<User[] | null>(null);

  const [itens, setItens] = useState<SelectorItem[]>([
    { id: '', name: '', value: {} },
  ]);

  useEffect(() => {
    CarerService.fetchCarers().then((result) => {
      if (result !== null) {
        setCarers(result);

        const values = result.map<SelectorItem>((c) => ({
          id: c.id?.toString() ?? '',
          name: c.profile?.name ?? '',
          value: c,
        }));

        setItens(values);
      }
    });
  }, []);

  return (
    <LazyComponent loading={carers === null}>
      <Selector
        onItemSelected={onCarerSelected}
        label="Cuidador"
        itens={itens}
      ></Selector>
    </LazyComponent>
  );
};

export default CarerSelector;
