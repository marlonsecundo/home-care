import React, { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import LazyComponent from '../../hoc/lazy-component';
import CarerService from '../../services/carer.serivce';
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
      if (result._type === 'ListResult') {
        setCarers(result);

        const values = result.map<SelectorItem>((c) => ({
          id: c.id?.toString() ?? '',
          name: c.profile?.name ?? '',
          value: c,
        }));

        setItens(values);
      } else {
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
