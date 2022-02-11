import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme';

export default configureStore({
	reducer: {
		theme: themeReducer,
	},
});

