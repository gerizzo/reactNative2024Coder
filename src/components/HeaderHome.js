import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>RappiYa!</Text>
    </View>
  )
}

export default HeaderHome

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2F79E",
        height: 80,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
    text: {
        fontSize: 30,
        fontWeight: "bold"
    },
    goBack: {
      position: "absolute",
      left: 10
    }
})