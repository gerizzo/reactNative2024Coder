import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import Home from './src/screens/Home'








const App = () => {

  const [foodSelected, setFoodSelected] = useState("")
  const comidaSelecionada = (food) => {
    setFoodSelected(food)
  }
  useEffect(() => {
    console.log(foodSelected)
  }, [foodSelected])

  return (
    <Home comidaSelecionada={comidaSelecionada}/>
  )
}

export default App

const styles = StyleSheet.create({})