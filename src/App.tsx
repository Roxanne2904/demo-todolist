import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { FormPage } from "./pages/FormPage";

export function App(): JSX.Element {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/new-todo-list" element={<FormPage />} />
			</Routes>
		</>
	);
}
