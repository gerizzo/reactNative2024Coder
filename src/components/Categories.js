import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tipoComida from '../utils/data/tipoComida.json';
import CardFood from './CardFood';

const Categories = ({ comidaSelecionada }) => {
  return (
    <FlatList
      style={styles.list}
      data={tipoComida}
      keyExtractor={(item, index) => item.tipo_comida}
      renderItem={({ item }) => <CardFood item={item} comidaSelecionada={comidaSelecionada} />}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  list: {
    marginTop: 30,
  },
});
