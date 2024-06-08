import { FrontTask } from "../../services/TasksService";
import { styled } from "styled-components";
import { COLORS } from "../../utils";
import { IconButton } from "./IconButton";

const StyledContent = styled.div`
	position: relative;
	background-color: #e6e6e6;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	margin: 0 1rem 2.4rem 1rem;
`;

const StyledTitle = styled.p`
	font-size: 1.2rem;
	padding-bottom: 0.5rem;
	border-bottom: solid 1px black;
`;

const StyledText = styled.p`
	width: 200px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;
const StyledStatus = styled.p<{ color: "to do" | "done" }>`
	background-color: aliceblue;
	padding: 0.5rem 0.8rem;
	width: fit-content;
	border-radius: 0.5rem;
	position: absolute;
	top: -35px;
	right: 15px;
	color: ${(props) => (props.color === "to do" ? COLORS.TODO : COLORS.DONE)};
	border: solid 1px
		${(props) => (props.color === "to do" ? COLORS.TODO : COLORS.DONE)};
`;

export const Task = (props: FrontTask): JSX.Element => {
	return (
		<StyledContent>
			<StyledTitle>
				<strong> {props.title} </strong>
			</StyledTitle>
			<StyledText> {props.text} </StyledText>
			<StyledStatus color={props.status}> {props.status} </StyledStatus>
			<IconButton {...props} />
		</StyledContent>
	);
};
