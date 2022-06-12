import { createSlice } from '@reduxjs/toolkit';

export const sarchInputDate = createSlice({
	name: 'searchInputDate',
	initialState: {
		value: 'Any time'
	},
	reducers: {
		changeDate: (state, action) => {
			state.value = action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { changeDate } = sarchInputDate.actions;

export default sarchInputDate.reducer;
