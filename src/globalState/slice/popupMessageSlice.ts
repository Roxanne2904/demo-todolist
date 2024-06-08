// src/features/tasks/tasksSlice.js
import { createSlice } from "@reduxjs/toolkit";

export interface PopupType {
	type: "success";
	message: string;
}

const initialState: PopupType = {
	type: "success",
	message: "",
};

const popupMessageSlice = createSlice({
	name: "popupMessage",
	initialState: initialState,
	reducers: {
		addSuccess: (state) => {
			state.message = "Your action has been completed successfully";
		},
	},
});

export const actions = popupMessageSlice.actions;

export const popupMessageReducer = popupMessageSlice.reducer;
