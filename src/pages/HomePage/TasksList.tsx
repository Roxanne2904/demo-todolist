import styled from "styled-components";
import { Task } from "../../components/Task/Task";
import { useTaskSelectors } from "../../globalState/selector/taskSelectors";

const StyledContent = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 0.5rem;
	padding-top: 1rem;
`;

export const TasksList = (): JSX.Element[] | JSX.Element => {
	const tasks = useTaskSelectors();

	if (!tasks) return <></>;
	return (
		<StyledContent>
			{tasks.map((task) => {
				return <Task key={task.id} {...task} />;
			})}
		</StyledContent>
	);
};
