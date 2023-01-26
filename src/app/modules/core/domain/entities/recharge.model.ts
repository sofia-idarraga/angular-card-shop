import { ISODate } from './valueObject/date.model';

export interface Recharge {
	uid: string;
	performedAt: ISODate;
	amount: number;
}
