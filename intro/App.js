import ContadorScreen from './screens/ContadorScreen'
//2.Main: Zona de componentes 
export default function App() {
  return (
    <ContadorScreen></ContadorScreen>
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

});
