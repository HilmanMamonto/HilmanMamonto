import { configureStore } from '@reduxjs/toolkit';
import searchInputDate from './features/search';

export default configureStore({
	reducer: {
		searchInputDate: searchInputDate
	}
});
