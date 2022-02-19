import { Mini } from './mini';
import { HOTELS } from './mock-hotels';

export const MINIS: Mini[] = [
  {
    id: '1',
    destination: 'Havane, Cuba',
    villeDeDepart: 'Edmonton',
    hotel: HOTELS[0],
    dateDepart: '15 avril 2021',
    dateRetour: '21 avril 2021',
    duree: '15 Jours',
    prix: 1299,
    rabais: 299,
    vedette: true,
  },
  {
    id: '2',
    destination: 'Philadephie, États-Unies',
    villeDeDepart: 'Vancouver',
    dateDepart: '15 avril 2021',
    hotel: HOTELS[0],
    dateRetour: '21 avril 2021',
    duree: '10 Jours',
    prix: 699,
    rabais: 99,
    vedette: true,
  },

  {
    id: '3',
    destination: 'Bucharest, Romanie',
    villeDeDepart: 'Montreal',
    dateDepart: '15 avril 2021',
    hotel: HOTELS[0],
    dateRetour: '21 avril 2021',
    duree: '6 Jours',
    prix: 2999,
    rabais: 250,
    vedette: true,
  },

  {
    id: '4',
    destination: 'Theran, Iran',
    villeDeDepart: 'Montreal',
    dateDepart: '15 avril 2021',
    hotel: HOTELS[0],
    dateRetour: '21 avril 2021',
    duree: '6 Jours',
    prix: 1999,
    rabais: 800,
    vedette: true,
  },

  //// Mini forfait False ///

  {
    id: '4',
    destination: 'Casablanca,Maroc',
    villeDeDepart: 'Calgary',
    dateDepart: '15 avril 2021',
    hotel: HOTELS[0],
    dateRetour: '21 avril 2021',
    duree: '6 Jours',
    prix: 2299,
    rabais: 1000,
    vedette: false,
  },

  //// False ///
];
