// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./globalState/slice/taskSlice";
import { popupMessageReducer } from "./globalState/slice/popupMessageSlice";

export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		popupMessage: popupMessageReducer,
	},
});

export default store;
