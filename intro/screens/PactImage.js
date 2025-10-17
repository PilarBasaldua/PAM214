import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';

export default function Ejemplo() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido a la App</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('./assets/intro/assets/nacimientovenus.jpg')} // Imagen local como fondo
      style={styles.background}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Explora nuestros cursos</Text>
        <Button title="Comenzar" onPress={() => alert('¡Bienvenido!')} />
      </View>
    </ImageBackground>
  );
}