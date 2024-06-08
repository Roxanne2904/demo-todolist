import { useState } from "react";
import styled from "styled-components";
import { Task } from "../data/taskData";
import { generateRandomId } from "../utils";
import { useTaskService } from "../services/TasksService";
import { usePopupMessageService } from "../services/popupMessageService";

const StyledForm = styled.form`
	min-width: 300px;
`;
const StyledPage = styled.div`
	display: flex;
	justify-content: center;
`;

export function FormPage(): JSX.Element {
	const [currentTitle, setTitle] = useState("");
	const [currentText, setText] = useState("");
	const { addTask } = useTaskService();
	const { successMessage } = usePopupMessageService();

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();

		const newTask: Task = {
			id: generateRandomId(),
			title: currentTitle,
			text: currentText,
			isCompleted: false,
		};

		successMessage();
		addTask(newTask);
	};

	return (
		<StyledPage>
			<StyledForm>
				<InputText label="Title" value={currentTitle} setValue={setTitle} />
				<InputTextArea
					label="You're content"
					value={currentText}
					setValue={setText}
				/>
				<input type="submit" value="create" onClick={handleClick} />
			</StyledForm>
		</StyledPage>
	);
}

const StyledLabel = styled.label`
	display: flex;
	flex-flow: column;
`;

export const InputText = ({
	label,
	value,
	setValue,
}: {
	label: string;
	value?: string;
	setValue: (val: string) => void;
}): JSX.Element => {
	return (
		<StyledLabel>
			{label}
			<input
				type={"text"}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</StyledLabel>
	);
};
export const InputTextArea = ({
	label,
	value,
	setValue,
}: {
	label: string;
	value?: string;
	setValue: (val: string) => void;
}): JSX.Element => {
	return (
		<StyledLabel>
			{label}
			<textarea
				rows={5}
				cols={33}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			></textarea>
		</StyledLabel>
	);
};
