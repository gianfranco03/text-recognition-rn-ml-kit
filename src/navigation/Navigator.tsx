import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from './routes';

import SelectImageScreen from '../screens/SelectImage/SelectImage';
import ProcessImageScreen from '../screens/ProcessImage/ProcessImage';

const Stack = createNativeStackNavigator();

const Navigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.SELECT_IMAGE}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={routes.SELECT_IMAGE}
          component={SelectImageScreen}
        />
        <Stack.Screen
          name={routes.PROCESS_IMAGE}
          component={ProcessImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
