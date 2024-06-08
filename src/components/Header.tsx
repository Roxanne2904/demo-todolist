import { styled } from "styled-components";
import { Nav } from "./Nav";

const StyledHeader = styled.header`
	display: flex;
	justify-content: end;
	background-color: #bebebe;
	padding: 0.5rem 0.5rem;
	border-radius: 0.5rem 0.5rem 0 0;
`;
const StyledContent = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	align-items: center;
`;
const StyledTitle = styled.h1`
	padding-left: 1rem;
`;

export function Header({ children }: { children: JSX.Element }): JSX.Element {
	return (
		<>
			<StyledHeader>{children}</StyledHeader>
		</>
	);
}
export function HeaderContent(): JSX.Element {
	return (
		<StyledContent>
			<StyledTitle>Todo lists</StyledTitle>
			<Nav />
		</StyledContent>
	);
}
