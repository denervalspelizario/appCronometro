import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'; // 1 - importanto imagem e o touchableopacity que é um tipo de botão
import Cronometro from './assets/cronometro.png';
 
class App extends Component {

  constructor(props){
    super(props);
    this.state = {   // 2 - states iniciais 
      numero: 0,
    }
    this.timer = null; // 3 - variavel para pausar o setInterval consequentemente pausar o relogio *obs toda vez que começa o app o timer esta null
    this.go = this.go.bind(this);   // 2 linkando o this.go com a funcao go  atravez da bind
    this.stop = this.stop.bind(this); // 2 linkando o this.stop com a funcao stop atravez da bind
  }

  go(){  // 3 funcao go para alterar state numero

    if (this.timer != null){ // 4 se for diferente de null ou seja esta rodando o relogio
      // 5 aqui vai parar o timer
      clearInterval(this.timer); // 5 limpa o intervalo e pausa
      this.timer = null; // 5 e  timer volta a ser null
      
    }else {

      this.timer = setInterval(() => {  // 3 - setInterval serve para executar uma função ou instrução várias vezes em um determinado intervalo de tempo // 4 this timer state para pausar
        this.setState({numero: this.state.numero + 0.1}) // 3  pega 0.0 + 0.1 e fazendo em looping
      }, 100); // 3 - de quantos milissegundos ele vai chamar o setInterval

    }
  };


  stop(){

  }


  render(){
    return(
      <View style={styles.container}>  
        <Image 
        source={Cronometro}
        style={styles.image}
        />                                  
          
        <Text style={styles.textCronometro}>
          {this.state.numero.toFixed(1) /* 2 state numero que vai ser alterado posteriormente - tofixed(1) para ter 1 casa decimal*/}
        </Text> 
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.go} /* 2 acao de pressionar e chamar o state go */ > 
            <Text style={styles.btnTexto}>Vai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.stop} /* 2 acao de pressionar e chamar o state stop */>
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