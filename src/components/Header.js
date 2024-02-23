import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.goBack} onPress={handleGoBack}>
        <AntDesign name='arrowleft' size={25} color="black"/>
      </Pressable>
      <Text style={styles.text}>RappiYa!</Text>
    </View>
  )
}

export default Header;

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
});
