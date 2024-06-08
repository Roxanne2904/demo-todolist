import { useSelector } from "react-redux";

import { FrontTask, dataToFront } from "../../services/TasksService";

export const useTaskSelectors = (): FrontTask[] => {
	const tasks = useSelector((state: any) => state.tasks);
	return dataToFront(tasks);
};
