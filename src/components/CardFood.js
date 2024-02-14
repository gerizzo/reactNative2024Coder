import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CardFood = ({ item, comidaSelecionada }) => {
  return (
    <Pressable onPress={() => comidaSelecionada(item)}>
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
