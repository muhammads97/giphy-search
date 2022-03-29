import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from '@giphy-search/views/search';
import {GIFScreen} from '@giphy-search/views/gif';
import {Routes} from '@giphy-search/navigation';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Routes.Search} component={SearchScreen} />
        <Stack.Screen name={Routes.GIF} component={GIFScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
