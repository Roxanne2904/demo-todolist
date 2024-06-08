import { type Task } from "../data/taskData";
import { useDispatch } from "react-redux";
import { actions } from "../globalState/slice/taskSlice";

export interface FrontTask {
	id: number;
	title: string;
	text: string;
	status: "done" | "to do";
}

export const useTaskService = (): {
	addTask: (payload: Task) => void;
	closeTask: (payload: Task) => void;
	deleteTask: (payload: Task) => void;
	refreshStatus: (payload: Task) => void;
} => {
	const dispatch = useDispatch();

	return {
		addTask: (payload: Task) => dispatch(actions.addTask(payload)),
		closeTask: (payload: Task) => dispatch(actions.closeTask(payload)),
		deleteTask: (payload: Task) => dispatch(actions.deleteTask(payload)),
		refreshStatus: (payload: Task) => dispatch(actions.refreshStatus(payload)),
	};
};

export const dataToFront = (data: Task[]): FrontTask[] => {
	return data.map((task: Task) => ({
		id: task.id,
		title: task.title,
		text: task.text,
		status: task.isCompleted ? "done" : "to do",
	}));
};
export const dataToBack = (data: FrontTask[]): Task[] => {
	return data.map((task: FrontTask) => ({
		id: task.id,
		title: task.title,
		text: task.text,
		isCompleted: task.status === "done" ? true : false,
	}));
};
