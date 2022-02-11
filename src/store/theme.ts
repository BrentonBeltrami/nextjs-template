import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
	theme: string;
}

const initialState: ThemeState = {
	theme: 'dark',
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		changeTheme: (state, action: PayloadAction<string>) => {
			state.theme = action.payload;
			localStorage.setItem('theme', action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
