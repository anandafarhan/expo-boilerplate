import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { enableScreens } from 'react-native-screens';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './Routes';
import store, { persistor } from './stores';

enableScreens();
LogBox.ignoreAllLogs(true);

export default function App(): React.ReactNode {
	return (
		<>
			<StatusBar style='auto' animated />
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<NavigationContainer>
						<Routes />
					</NavigationContainer>
				</PersistGate>
			</Provider>
		</>
	);
}
