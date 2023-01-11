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
    width: 200,
    height: 200,
  },
  textCronometro:{

  }
});

export default App;