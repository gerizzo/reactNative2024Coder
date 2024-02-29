import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const CardFood = ({ item, comidaSeleccionada }) => {
  return (
    <Pressable onPress={() => comidaSeleccionada(item)}>
      <View style={styles.container}>
        <Text>{item.tipo_comida}</Text>
      </View>
    </Pressable>
  );
};

export default CardFood;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: "#F2F79E",
    marginHorizontal: "10%",
    marginVertical: 10,
    padding: 20,
    alignItems: "center",
    borderRadius: 5
  }
});