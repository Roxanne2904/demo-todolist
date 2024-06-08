export interface Task {
	id: number;
	title: string;
	text: string;
	isCompleted: boolean;
}

export const tasks: Task[] = [
	{
		id: 0o0,
		title: "Nettoyer la caisse des chats",
		text: "Samedi matin après avoir tondu la pelouse",
		isCompleted: false,
	},
	{
		id: 0o1,
		title: "Faire la vaisselle",
		text: "Dimanche matin, et ranger le lave vaisselle",
		isCompleted: false,
	},
	{
		id: 0o2,
		title: "Nettoyer la chambre",
		text: "Dimanche matin, après la vaisselle",
		isCompleted: false,
	},
	{
		id: 0o3,
		title: "Tondre la pelouse",
		text: "Samedi matin. Penser à ramasser les cacas du chien et à jeter l'herbe après avoir accompli la tâche",
		isCompleted: false,
	},
];
