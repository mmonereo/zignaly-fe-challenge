import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PhoneService from '../../services/phone-service';

const myPhoneService = new PhoneService();

export const phonesSlice = createSlice({
	name: 'phones',
	initialState: {
		data: [],
		loading: false,
		error: null
	},
	reducers: {

	},
	extraReducers(builder){
		builder
			.addCase(getPhones.pending, (state) => {
				state.loading = true;
			})
			.addCase(getPhones.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			})
			.addCase(getPhones.rejected, (state, action) => {
				state.error = action.error;
				state.loading = false;
			})
	}
})

export const getPhones = createAsyncThunk('phones/getPhones', async () => {
	const response = await myPhoneService.getAllPhones();
	return response.data;
})

export const selectAllPhones = state => state.phones.data;


export default phonesSlice.reducer;

