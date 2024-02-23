import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import Categories from '../components/Categories'
import HeaderHome from '../components/HeaderHome';

export default function Home({comidaSelecionada}) {
  return (
    <View style={styles.container}>
        <HeaderHome/>
        <Categories comidaSelecionada={comidaSelecionada}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

