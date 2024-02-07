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
        <Button title='Agregar' onPress={addRecordatorio}/>
      </View>
      <View style={styles.recordatoriosContainer}>
        <FlatList 
          data={recordatorios}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.recordatorioCard}>
              <Text style={styles.text}>{item.titulo}</Text>
              <Button title='Borrar' style={styles.boton} onPress={() => onHandlerDelete(item.id)} />
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
    backgroundColor: '#9AF5FA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  recordatoriosContainer: {
    flex: 1,
    width: '100%',
  },
  recordatorioCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    marginBottom: 10,
  },
  text: {
    flex: 1,
    color: "black",
    fontSize: 15,
  }
});

