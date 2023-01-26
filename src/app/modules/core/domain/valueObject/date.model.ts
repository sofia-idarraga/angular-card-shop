export class ISODate {
	public ISOString: string;

	public constructor(string: string) {
		this.ISOString = string;
	}

	public static toDate(string: string): Date {
		return new Date(string);
	}
}
