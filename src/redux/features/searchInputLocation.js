import { createSlice } from '@reduxjs/toolkit';

export const searchInputLocation = createSlice({
	name: 'searchInputLocation',
	initialState: {
		value: 'Where are you going'
	},
	reducers: {
		changeLocation: (state, action) => {
			state.value = action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { changeLocation } = searchInputLocation.actions;

export default searchInputLocation.reducer;
