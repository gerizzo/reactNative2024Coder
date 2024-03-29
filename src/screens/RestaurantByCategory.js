import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import restaurantes from '../utils/data/restaurantes.json';

const RestaurantByCategory = ({ navigation, route }) => {
  const { selectedFood } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.restaurantContainer}>
            <Text style={styles.restaurantName}>{item.nombre}</Text>
            <Text style={styles.restaurantLocation}>{item.ubicacion}</Text>
          </View>
        )}
        contentContainerStyle={styles.flatListContainer} 
      />
    </View>
  );
};

export default RestaurantByCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F79E",
    alignItems: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textDecorationLine: "underline"
  },
  restaurantContainer: {
    backgroundColor: "#FFF",
    padding: 10,
    marginBottom: 20,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  restaurantLocation: {
    fontSize: 16,
  },
  flatListContainer: {
    paddingBottom: 20, 
  },
});
