import { Hotel } from './hotel';

export interface Forfait {
  id: string;
  destination: string;
  villeDeDepart: string;
  hotel: Hotel;
  dateDepart: string;
  dateRetour: string;
  duree: string;
  prix: number;
}
