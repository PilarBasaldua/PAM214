// Importamos los módulos necesarios desde React y React Native
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, SafeAreaView } from 'react-native';

// Componente principal llamado "Ejemplo"
export default function Ejemplo() {

  // Declaramos una variable de estado llamada "showSplash" (pantalla de bienvenida)
  // useState(true) significa que al inicio se muestra la pantalla splash
  const [showSplash, setShowSplash] = useState(true);

  // useEffect se ejecuta una sola vez cuando el componente se monta
  // Sirve para ocultar la pantalla de bienvenida después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // cambia el estado para ocultar el splash
    }, 2000);
    return () => clearTimeout(timer); // limpia el temporizador al desmontar el componente
  }, []);

  // Si "showSplash" es verdadero, se muestra esta vista (pantalla de bienvenida)
  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido a la App</Text>
      </View>
    );
  }

  // Si "showSplash" es falso, se muestra el contenido principal de la app
  return (
    // SafeAreaView evita que el contenido se superponga con la barra de estado (iOS o Android)
    <SafeAreaView style={{ flex: 1 }}>
      
      {/* ImageBackground coloca una imagen como fondo de toda la pantalla */}
      <ImageBackground
        source={{
          uri: 'https://wallpapercave.com/wp/wp3850825.jpg',
        }} // URL de la imagen que se usa como fondo
        style={styles.background} // se aplican los estilos del fondo
      >
        {/* View que contiene el texto y el botón, con un fondo semitransparente */}
        <View style={styles.overlay}>
          {/* Texto principal */}
          <Text style={styles.title}>Explora nuestros cursos</Text>

          {/* Botón que muestra una alerta al presionarlo */}
          <Button title="Comenzar" onPress={() => alert('¡Bienvenido!')} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Objeto "styles" donde se definen los estilos de todos los elementos
const styles = StyleSheet.create({
  
  // Estilo del contenedor del splash (pantalla de bienvenida)
  splashContainer: {
    flex: 1, // ocupa toda la pantalla
    backgroundColor: '#4682B4', // color azul de fondo
    justifyContent: 'center', // centra el contenido verticalmente
    alignItems: 'center', // centra el contenido horizontalmente
  },

  // Estilo del texto del splash
  splashText: {
    fontSize: 24, // tamaño del texto
    color: '#fff', // color blanco
  },

  // Estilo de la imagen de fondo
  background: {
    flex: 1, // ocupa todo el espacio disponible
    justifyContent: 'center', // centra el contenido dentro de la imagen
    alignItems: 'center', // centra horizontalmente
  },

  // Estilo del recuadro oscuro semitransparente que está encima de la imagen
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', // negro con 50% de transparencia
    padding: 20, // espacio interno
    borderRadius: 10, // esquinas redondeadas
  },

  // Estilo del título principal
  title: {
    fontSize: 28, // tamaño del texto
    color: '#fff', // color blanco
    marginBottom: 10, // espacio debajo del texto
    textAlign: 'center', // centrado
  },
});