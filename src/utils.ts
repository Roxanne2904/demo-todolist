export function generateRandomId() {
	return Number(Date.now() + Math.floor(Math.random() * 10000));
}

export enum COLORS {
	DONE = `green`,
	TODO = `orange`,
	DELETE = `red`,
}
