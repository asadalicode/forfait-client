import { TableColumn } from './columns';

export const Administration: TableColumn[] = [
  {
    name: 'Date de depart',
    dataKey: 'dateDepart',
    position: 'left',
    isSortable: false,
  },

  {
    name: 'Date de retour',
    dataKey: 'dateRetour',
    position: 'left',
    isSortable: false,
  },
  {
    name: 'Nom de l`hotel',
    dataKey: 'hotel',
    position: 'left',
    isSortable: false,
  },
  {
    name: 'Prix',
    dataKey: 'prix',
    position: 'left',
    isSortable: false,
  },
];
