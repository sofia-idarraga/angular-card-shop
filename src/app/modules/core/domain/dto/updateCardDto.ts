import { HistoryChange } from "../entities/historyChange.model";

export interface UpdateCard {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  activeForSale: boolean;
  history: HistoryChange[];
}
