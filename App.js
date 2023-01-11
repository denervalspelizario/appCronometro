import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'; // 1 - importanto imagem e o touchableopacity que é um tipo de botão
import Cronometro from './assets/cronometro.png';
 
class App extends Component {
  render(){
    return(
      <View style={styles.container}>  
        <Image 
        source={Cronometro}
        style={styles.image}
        />
        <Text style={styles.textCronometro}>0.0</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTexto}>Vai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    
  },
  textCronometro:{
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00BFFF'
  }
});

export default App;