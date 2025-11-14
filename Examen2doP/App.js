import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, SafeAreaView } from 'react-native';

export default function Ejemplo() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); 
    },4000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido a la App</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <ImageBackground
        source={{
          uri: 'https://wallpapercave.com/wp/wp3850825.jpg',
        }}
        style={styles.background} 
      >
         <View style={styles.overlay}>
          <Text style={styles.title}>Pilar Basaldua Hernández</Text>
          <Text style={styles.title}>Estudiante</Text>
          <Text style={styles.title}>Estudio la carrera de ingenieria en Tecnologias de la informacion e innovacion digital</Text>
          <Text style={styles.title}>124049109@upq.edu.mx</Text>
          <Text style={styles.title}>4426541100</Text>
        </View>
      </ImageBackground>
      <Button>Editar perfil</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({


  splashContainer: {
    flex: 1, 
    backgroundColor: '#000000ff', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  
  splashText: {
    fontSize: 24, 
    color: '#fff', 
  },

  
  background: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.22)', 
    padding: 20, 
    borderRadius: 10, 
  },

  
  title: {
    fontSize: 28, 
    color: '#000000ff', 
    marginBottom: 10, 
  resizeMode: 10,
    textAlign: 'center', 
  },
});