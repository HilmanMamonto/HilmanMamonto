import { configureStore } from '@reduxjs/toolkit';
import searchInputDate from './features/searchInputDate';
import searchInputLocation from './features/searchInputLocation';

export default configureStore({
	reducer: {
		searchInputDate: searchInputDate,
		searchInputLocation: searchInputLocation
	}
});
