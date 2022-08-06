import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountModel } from './model';

const initialState = {
	isLoading: false,
	profile: null,
	access_token: null,
	refresh_token: null,
	extra_token: null,
	error: { isError: false, detail: null },
} as AccountModel;

const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {
		setIsLoading(state, action: PayloadAction<AccountModel['isLoading']>) {
			state.isLoading = action.payload;
		},
		setProfile(state, action: PayloadAction<AccountModel['profile']>) {
			state.profile = action.payload;
		},
		setAccessToken(state, action: PayloadAction<AccountModel['access_token']>) {
			state.access_token = action.payload;
		},
		setRefreshToken(state, action: PayloadAction<AccountModel['refresh_token']>) {
			state.refresh_token = action.payload;
		},
		setExtraToken(state, action: PayloadAction<AccountModel['extra_token']>) {
			state.extra_token = action.payload;
		},
		setAccountError(state, action: PayloadAction<AccountModel['error']>) {
			state.error = action.payload;
		},
	},
});

export const {
	setIsLoading,
	setProfile,
	setAccessToken,
	setRefreshToken,
	setExtraToken,
	setAccountError,
} = accountSlice.actions;
export default accountSlice.reducer;
