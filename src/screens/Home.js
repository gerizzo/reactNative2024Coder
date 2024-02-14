import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import Categories from '../components/Categories'
import Header from '../components/Header';

export default function Home({comidaSelecionada}) {
  return (
    <View style={styles.container}>
        <Header/>
        <Categories comidaSelecionada={comidaSelecionada}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

