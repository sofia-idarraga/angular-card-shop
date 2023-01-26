import { LogTypes } from './enums/logTypes.model';
import { ISODate } from './valueObject/date.model';

export interface Log {
	uid: string;
	type: LogTypes;
	description: string;
	timestamp: ISODate;
}
