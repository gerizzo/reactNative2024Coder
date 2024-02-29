import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import tipoComida from '../utils/data/tipoComida.json';
import CardFood from './CardFood';

const Categories = ({ comidaSeleccionada }) => {
  return (
    <FlatList
      style={styles.list}
      data={tipoComida}
      keyExtractor={(item, index) => item.tipo_comida}
      renderItem={({ item }) => <CardFood item={item} comidaSeleccionada={comidaSeleccionada} />}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  list: {
    marginTop: 30,
  },
});
