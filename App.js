import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/Home';
import { showMessages } from './src/screens/showMessages';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Messages" component={showMessages} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

