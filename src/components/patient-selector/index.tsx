import React, { useEffect, useState } from 'react';
import LazyComponent from '../../hoc/lazy-component';
import PatientService from '../../services/patient.service';
import { User } from '../../types/models';
import { ListResult } from '../../types/services';
import Selector, { SelectorItem } from '../selector';

interface Props {
  onPatientSelected: (item: SelectorItem) => void;
}

const PatientSelector: React.FC<Props> = ({ onPatientSelected }) => {
  const [patients, setPatients] = useState<User[] | null>(null);

  const [itens, setItens] = useState<SelectorItem[]>([
    { id: '', name: '', value: {} },
  ]);

  useEffect(() => {
    PatientService.fetchPatients().then((result) => {
      if (result._type === 'ListResult') {
        setPatients(result);
      }
    });
  }, []);

  useEffect(() => {
    if (patients !== null) {
      const values = patients.map<SelectorItem>((n) => ({
        id: n.id?.toString() ?? '',
        name: n.profile?.name ?? '',
        value: n,
      }));

      setItens(values);
    }
  }, [patients]);

  return (
    <LazyComponent loading={patients === null}>
      <Selector
        label="Paciente"
        onItemSelected={onPatientSelected}
        itens={itens}
      ></Selector>
    </LazyComponent>
  );
};

export default PatientSelector;
