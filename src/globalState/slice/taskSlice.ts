// src/features/tasks/tasksSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { Task, tasks } from "../../data/taskData";

const tasksSlice = createSlice({
	name: "tasks",
	initialState: tasks,
	reducers: {
		addTask: (state, action) => {
			return (state = [...state, action.payload]);
		},
		closeTask: (state, action) => {
			return state.map((task) => {
				const isTheSameTaskId = task.id === action.payload.id;
				if (isTheSameTaskId) return { ...task, isCompleted: true };
				return task;
			});
		},
		deleteTask: (state, action) => {
			const taskIndex = state.findIndex(
				(task) => task.id === action.payload.id
			);
			const notFound = taskIndex === -1;

			if (notFound) return state;
			const newState = [...state];

			newState.splice(taskIndex, 1);

			return newState;
		},
		refreshStatus: (state, action) => {
			const updatedTask: Task = { ...action.payload, isCompleted: false };

			const taskIndex = state.findIndex(
				(task) => task.id === action.payload.id
			);
			const notFound = taskIndex === -1;

			if (notFound) return state;
			const newState = [...state];

			newState.splice(taskIndex, 1, updatedTask);

			return newState;
		},
	},
});

export const actions = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
