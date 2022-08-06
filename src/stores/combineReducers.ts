// import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import createSensitiveStorage from 'redux-persist-sensitive-storage';

import account from './account/slice';

const sensitiveStorage = createSensitiveStorage({
	keychainService: 'myKeychain',
	sharedPreferencesName: 'mySharedPrefs',
});

export default combineReducers({
	account: persistReducer(
		{
			key: 'account',
			storage: sensitiveStorage,
			throttle: 1000,
			blacklist: ['profile', 'error'],
		},
		account
	),
});
