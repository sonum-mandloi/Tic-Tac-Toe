import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Home'
import Logic from './src/Logic'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }} 
      initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Logic" component={Logic} />
      </Stack.Navigator>   
    </NavigationContainer>
    
    </>
  )
}

export default App