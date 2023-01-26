import { HistoryChange } from './historyChange.model';

export interface Card {
	uid: string;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
	activeForSale: boolean;
	history: HistoryChange[];
}
