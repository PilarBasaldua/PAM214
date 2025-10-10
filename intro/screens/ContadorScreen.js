//1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

//2.Main: Zona de componentes 
export default function ContadorScreen() {
  const[contador, setContador]=useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.texto}> Contador: </Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color="#fd77caff" title="Agregar" onPress={() => setContador(contador + 1)}/>

      <Button color="#f638adff" title="Quitar" onPress={() => setContador(contador - 1)}/>

      <Button color="#b20670ff" title="Reiniciar" onPress={() => setContador(contador - contador)}/>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

// 3. Estilos: Zona estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1, //le va asignar diponible para trabajar 
    backgroundColor: '#fcd2ecff',
    alignItems: 'center', //Es para mover el contenido end, center, start 
    justifyContent: 'center', // Arriba o abajo el texto end, center, start
  },
  texto: {
    color: '#710648ff',
    fontSize: 30, 
    fontFamily: 'Time New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through', 
  },
  texto2: {
    color: '#a30f6bff',
    fontSize: 40, 
    fontFamily: 'Courier',
    fontWeight: '900',
    fontStyle: 'italic',
    textDecorationLine: 'underline', 
  },
  contenedorBotones:{
    marginTop:15,
    flexDirection: 'row',
    gap: 10,
  },

});
