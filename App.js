import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { BooksDetail } from './screens';
import Tabs from './navigation/tabs';

const theme = { 
    ...DefaultTheme,
    colors : {
      ...DefaultTheme.colors,
      border: "transperant"
    }
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown : false
          }}
          initialRouteName={'Home'}
        >
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="BookDetail" component={BooksDetail} options={{ headerShown : false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
