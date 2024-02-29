import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import RestaurantByCategory from '../screens/RestaurantByCategory'

const Stack = createNativeStackNavigator()

const MainNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen
                name='Home'
                component={ Home }
            />

            <Stack.Screen 
                name='Restaurantes En Tu Zona'
                component={ RestaurantByCategory }
            />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})