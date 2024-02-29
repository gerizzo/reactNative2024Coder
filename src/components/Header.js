import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>RappiYa!</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2F79E",
        height: 80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 30,
        fontWeight: "bold"
    }
})