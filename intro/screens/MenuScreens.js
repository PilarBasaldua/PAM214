import {Text, StyleSheet, View, Button} from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'

export default function MenuScreens () {
    const [screen,setScreen]=useState('menu');
    switch (screen){
        case 'contador':
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'menu':
        default:
            return (
                <View>
                    <Text>Menu Practicas</Text>
                    <Button onPress={()=>setScreen('contador')} title='Pract:Contador'/>
                    <Button onPress={()=>setScreen('botones')} title='Pract:Buttons'/> 
                    <Button onPress={()=>setScreen('image')} title='Pract:ImageBackground'/> 
                </View> 
            )
    }
}
