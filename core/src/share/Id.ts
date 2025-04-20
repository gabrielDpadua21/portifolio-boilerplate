export default class Id {
	static generate(): String {
		const partOne = this.generateValues();
		const partTwo = this.generateValues();
		const partThree = this.generateValues();
		return `${partOne}-${partTwo}-${partThree}`;
	}

	static generateValues(): String {
		return Math.random().toString(36).substring(2, 9);
	}
}
