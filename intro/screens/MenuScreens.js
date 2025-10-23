import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import Ejemplo from './Ejemplo'; // 👈 Pantalla que quieres mostrar
import TextImputScreen from './TextImputScreen'; 

export default function MenuScreens() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'ejemplo':   // 👈 Caso correcto para Ejemplo.js
      return <Ejemplo />;
    case 'text':   // 👈 Caso correcto para Ejemplo.js
      return <TextImputScreen />;
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menu Prácticas</Text>
          <View style={styles.buttonContainer}>
            
            <View style={styles.buttonSquare}>
              <Button
                onPress={() => setScreen('contador')}
                title='Pract:Contador'
                color="#F4A7B9"
              />
            </View>
            <View style={styles.buttonSquare}>
              <Button
                onPress={() => setScreen('botones')}
                title='Pract:Buttons'
                color="#F4A7B9"
              />
            </View>

            <View style={styles.buttonSquare}>
              <Button 
                onPress={() => setScreen('ejemplo')} // 👈 Aquí vamos a Ejemplo
                title='Pract:ImageBackground' 
                color="#F4A7B9" 
              />
            </View>

            {/* Los demás botones aún no hacen nada */}
            <View style={styles.buttonSquare}>
              <Button 
              onPress={() => setScreen('text')} 
              title='Text Input & Alert' 
              color="#F4A7B9" />
            </View>
            <View style={styles.buttonSquare}>
              <Button title='ScrollView' color="#F4A7B9" />
            </View>
            <View style={styles.buttonSquare}>
              <Button title='ActivityIndicator' color="#F4A7B9" />
            </View>
            <View style={styles.buttonSquare}>
              <Button title='FlatList y Section List' color="#F4A7B9" />
            </View>
            <View style={styles.buttonSquare}>
              <Button title='Modal' color="#F4A7B9" />
            </View>
            <View style={styles.buttonSquare}>
              <Button title='Bottom Sheet' color="#F4A7B9" />
            </View>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B3A62',
    marginBottom: 25,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonSquare: {
    width: 180,
    height: 45,
    marginVertical: 6,
    borderRadius: 0, // botones cuadrados
    overflow: 'hidden',
  },
});
