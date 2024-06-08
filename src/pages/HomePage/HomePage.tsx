import styled from "styled-components";
import { TasksList } from "./TasksList";

const StyledMain = styled.main`
	background-color: #ffffff;
	padding: 1.8rem 4rem;
	display: flex;
	flex-flow: column;
	width: 70%;
	border-radius: 0.5rem;
`;
const StyledTitle = styled.h2`
	align-self: center;
	padding-bottom: 1rem;
`;

export function HomePage(): JSX.Element {
	return (
		<Wrapper>
			<StyledMain>
				<StyledTitle>My Tasks</StyledTitle>
				<TasksList />
			</StyledMain>
		</Wrapper>
	);
}

const StyledContent = styled.div`
	background-color: #aeaeae;
	display: flex;
	justify-content: center;
	width: 100%;
	align-items: center;
	height: 88.8%;
`;

export const Wrapper = ({
	children,
}: {
	children: JSX.Element;
}): JSX.Element => {
	return <StyledContent>{children}</StyledContent>;
};
