import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledList = styled.ul`
	list-style-type: none;
	padding: 0 1.5rem 0 0;
	display: flex;
	gap: 1rem;
`;
const StyledButton = styled.button`
	border-radius: 0.3rem;
`;

export function Nav(): JSX.Element {
	return (
		<nav>
			<StyledList>
				<li>
					<Link to="/">
						<StyledButton>Home</StyledButton>
					</Link>
				</li>
				<li>
					<Link to="/new-todo-list">
						<StyledButton>Create a new task</StyledButton>
					</Link>
				</li>
			</StyledList>
		</nav>
	);
}
