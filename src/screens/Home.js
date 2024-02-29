import React from 'react';
import { StyleSheet, View } from 'react-native';
import Categories from '../components/Categories';
import Header from '../components/Header';

export default function Home({ navigation }) {
  const comidaSeleccionada = (item) => {
    navigation.navigate('Restaurantes En Tu Zona', { selectedFood: item });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Categories comidaSeleccionada={comidaSeleccionada} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
