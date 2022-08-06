import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './screens';

const Routes: React.FC = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen name='Screen' component={Screen} />
		</Stack.Navigator>
	);
};

export default Routes;
