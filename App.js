import React from 'react';
import HomeScreen from './src/HomeScreen';
import SecondScreen from './src/SecondScreen';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator(); // Stack contains Screen & Navigator properties
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='second' component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;