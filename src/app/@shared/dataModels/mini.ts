import { Hotel } from './hotel';

export interface Mini {
  id: string;
  destination: string;
  hotel: Hotel;
  villeDeDepart: string;
  dateDepart: string;
  dateRetour: string;
  duree: string;
  prix: number;
  rabais: number;
  vedette: boolean;
}
