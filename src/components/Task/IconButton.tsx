import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTrash,
	faCheck,
	faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
	FrontTask,
	dataToBack,
	useTaskService,
} from "../../services/TasksService";
import styled from "styled-components";
import { COLORS } from "../../utils";

const StyledContent = styled.div`
	display: flex;
	gap: 0.3rem;
	position: absolute;
	top: -15px;
	left: 15px;
`;
const StyledButton = styled.button`
	background-color: aliceblue;
	padding: 0.5rem 0.6rem;
	width: fit-content;
	border-radius: 50%;
	font-size: 0.8rem;
	color: ${COLORS.DELETE};
	border: 1px solid ${COLORS.DELETE};
`;
const StyledDelete = styled(StyledButton)`
	color: ${COLORS.DELETE};
	border: 1px solid ${COLORS.DELETE};
`;
const StyledValidate = styled(StyledButton)`
	color: ${COLORS.DONE};
	border: 1px solid ${COLORS.DONE};
`;
const StyledRefresh = styled(StyledButton)`
	color: ${COLORS.TODO};
	border: 1px solid ${COLORS.TODO};
`;

export const IconButton = (props: FrontTask): JSX.Element => {
	const { deleteTask } = useTaskService();
	const transformData = dataToBack([props])[0];

	const handleDelete = () => deleteTask(transformData);

	return (
		<StyledContent>
			<StyledDelete onClick={handleDelete}>
				<FontAwesomeIcon icon={faTrash} />
			</StyledDelete>
			<ToogleStatus {...props} />
		</StyledContent>
	);
};

const ToogleStatus = (props: FrontTask) => {
	const { closeTask, refreshStatus } = useTaskService();
	const transformData = dataToBack([props])[0];

	const handleClose = () => closeTask(transformData);
	const handleRefreshStatus = () => refreshStatus(transformData);
	if (props.status === "to do")
		return (
			<StyledValidate onClick={handleClose}>
				<FontAwesomeIcon icon={faCheck} />
			</StyledValidate>
		);

	return (
		<StyledRefresh onClick={handleRefreshStatus}>
			<FontAwesomeIcon icon={faRotateLeft} />
		</StyledRefresh>
	);
};
