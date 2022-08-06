import { persistStore } from 'redux-persist';
import combineReducers from './combineReducers';
import { configureStore } from '@reduxjs/toolkit';

//Redux Store
const store = configureStore({
	reducer: combineReducers,
	devTools: __DEV__,
	middleware: (getDefaultMiddleware) => {
		if (__DEV__) {
			return getDefaultMiddleware({
				immutableCheck: false,
				serializableCheck: false,
			});
		}

		return getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		});
	},
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
