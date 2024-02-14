import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Home from './src/screens/Home'
import RestaurantByCategory from './src/screens/RestaurantByCategory'

const App = () => {

  const [foodSelected, setFoodSelected] = useState("")

  const comidaSelecionada = (food) => {
    setFoodSelected(food)
  }

  return (
    <>
      {foodSelected ? 
        <RestaurantByCategory />
        :
        <Home comidaSelecionada={comidaSelecionada} />
      }
    </>
  )
}

export default App

const styles = StyleSheet.create({})
