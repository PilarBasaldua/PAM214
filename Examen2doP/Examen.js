import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, ImageBackground, Button, SafeAreaView } from 'react-native';

export default function Examen(){
    const [showSplash, setShowSplash] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() =>{
            setShowSplash(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, [])
    if(showSplash) {
        return (
            <View style={StyleSheet.splashContainer}>
                <Text style={StyleSheet.splashText}>Bienvenido a la App</Text>
            </View>
        );
    }
    return (
        <safeAreaView style={{flex: 1}}>
            <ImageBackground 
            source={{
                uri: '',
            }}
            style={StyleSheet.background}
            >
            <View style={StyleSheet.overlay}>
                <Text style={StyleSheet.title}>Pilar Basaldua Hernández</Text>
                <Text style={StyleSheet.title}>Estudiante</Text>
                <Text style={StyleSheet.title}>Estudio la carrera de ingenieria en Tecnologias de la informacion e innovacion digital</Text>
                <Text style={StyleSheet.title}>124049109@upq.edu.mx</Text>
                <Text style={StyleSheet.title}>4426541100</Text>
            </View>
            </ImageBackground>
        </safeAreaView>
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
        justifyContent:'center',
        alignItems: 'center',
    },

    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20,
        borderRadius: 10,
    },


    title: {
        fontSize: 28,
        color: '#fff',
        marginBottom: 10,
        resizeMode: 10,
        textAlign: 'center',
    },
})