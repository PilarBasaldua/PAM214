import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import Ejemplo from './Ejemplo';
import TextImputScreen from './TextImputScreen'; 
import Repaso from './Repaso';
import ScrollView from './ScrollView';
import ActivityScreen from './ActivityScreen';

export default function MenuScreens() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'ejemplo':
      return <Ejemplo />;
    case 'text':
      return <TextImputScreen />;
    case 'repaso1':
      return <Repaso />;
    case 'scroll':
      return<ScrollView/>;
    case 'activity':
      return <ActivityScreen />;
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menu Prácticas</Text>
          <View style={styles.buttonContainer}>
            
            <View style={styles.buttonSquare}>
              <Button
                onPress={() => setScreen('contador')}
                title='Contador'
                color="#F4A7B9"
              />
            </View>
            <View style={styles.buttonSquare}>
              <Button
                onPress={() => setScreen('botones')}
                title='Buttons'
                color="#F4A7B9"
              />
            </View>

            <View style={styles.buttonSquare}>
              <Button 
                onPress={() => setScreen('ejemplo')} 
                title='ImageBackground' 
                color="#F4A7B9" 
              />
            </View>
            <View style={styles.buttonSquare}>
              <Button 
                onPress={() => setScreen('repaso1')} 
                title='Repaso 1' 
                color="#F4A7B9" 
              />
            </View>

             <View style={styles.buttonSquare}>
              <Button 
                onPress={() => setScreen('scroll')} 
                title='ScrollView' 
                color="#F4A7B9" 
              />
            </View>

            <View style={styles.buttonSquare}>
              <Button 
              onPress={() => setScreen('activity')}
              title='ActivityScreen' 
              color="#F4A7B9" />
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
    borderRadius: 0,
    overflow: 'hidden',
  },
});
