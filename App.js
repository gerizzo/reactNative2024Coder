import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [newRecordatorio, setNewRecordatorio] = useState({
    titulo: "",
    id: ""
  });
  const [recordatorios, setRecordatorios] = useState([]);

  const addRecordatorio = () => {
    const id = generateUUID(); // Generar ID único
    setRecordatorios([...recordatorios, { ...newRecordatorio, id }]);
    setNewRecordatorio({
      titulo: "",
      id: ""
    });
  };

  const onHandlerTitle = (recordatorio) => {
    setNewRecordatorio({ ...newRecordatorio, titulo: recordatorio });
  };

  const onHandlerDelete = (id) => {
    setRecordatorios(recordatorios.filter(recordatorio => recordatorio.id !== id));
  };

  // Función para generar UUIDs únicos manualmente
  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={newRecordatorio.titulo}
          onChangeText={onHandlerTitle}
          placeholder='Ingresar Recordatorio :D'
          style={styles.input}
        />
        <Button title='ADD' onPress={addRecordatorio}/>
      </View>
      <View style={styles.recordatoriosContainer}>
        <FlatList 
          data={recordatorios}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.recordatorioCard}>
              <Text style={styles.text}>{item.titulo}</Text>
              <Button title='DEL' onPress={() => onHandlerDelete(item.id)} />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: 'row'
  },
  input: {
    width: 250,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  recordatoriosContainer: {
    padding: 10
  },
  recordatorioCard: {
    flexDirection: "row",
    padding: 20,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 5
  },
  text: {
    width: "70%",
    color: "black",
    fontSize: 15
  }
});
