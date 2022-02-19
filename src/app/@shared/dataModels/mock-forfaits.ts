import { Forfait } from './forfait';
import { HOTELS } from './mock-hotels';

export const FORFAITS: Forfait[] = [
  {
    id: '1',
    destination: 'Mexico',
    villeDeDepart: 'Montreal',
    hotel: HOTELS[0],
    dateDepart: '1 ',
    dateRetour: '15 Novembre 2021',
    duree: '15 jours',
    prix: 1050,
  },

  {
    id: '2',
    destination: 'Cuba',
    villeDeDepart: 'Montreal',
    hotel: HOTELS[1],
    dateDepart: '15 ',
    dateRetour: '30 Novembre 2021',
    duree: '15 jours',
    prix: 1550,
  },
];
