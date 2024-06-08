import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./style/index.css";
import { Header, HeaderContent } from "./components/Header";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<Provider store={store}>
				<Header>
					<HeaderContent />
				</Header>
				<App />
			</Provider>
		</Router>
	</React.StrictMode>
);
