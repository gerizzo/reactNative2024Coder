import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import Home from './src/screens/Home';
import RestaurantByCategory from './src/screens/RestaurantByCategory';

const Stack = createStackNavigator();

const App = () => {
  const [foodSelected, setFoodSelected] = useState("");

  const comidaSelecionada = (food) => {
    setFoodSelected(food);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantByCategory" component={RestaurantByCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
