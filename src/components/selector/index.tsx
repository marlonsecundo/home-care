import React, { useCallback } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import {
  Autocomplete,
  AutocompleteItem,
  Icon,
  IndexPath,
  Layout,
  Select,
  SelectItem,
} from '@ui-kitten/components';
import { ColumnContainer } from '../../styles/layout';
import { P1 } from '../../styles/global';

export interface SelectorItem {
  name: string;
  id: string;
  value: any;
}

interface Props {
  itens: SelectorItem[];
  onItemSelected: (name: SelectorItem) => void;
  label: string;
}

export const Selector: React.FC<Props> = ({ itens, onItemSelected, label }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(-1));
  const selectItens = itens.map<any>((i) => {
    return <SelectItem key={i.id} title={i.name} />;
  });

  const onSelect = useCallback(
    (index: IndexPath | IndexPath[]) => {
      const i = index as IndexPath;

      setSelectedIndex(i as IndexPath);

      onItemSelected(itens[i.row]);
    },
    [itens]
  );

  return (
    <Layout level="1">
      <ColumnContainer>
        <P1 style={{ marginBottom: 5 }}>{label} </P1>
        <Select
          value={selectedIndex.row !== -1 ? itens[selectedIndex.row].name : ''}
          selectedIndex={selectedIndex.row !== -1 ? selectedIndex : undefined}
          onSelect={onSelect}
          placeholder="Selecione um"
        >
          {selectItens}
        </Select>
      </ColumnContainer>
    </Layout>
  );
};

export default Selector;
