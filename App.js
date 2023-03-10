import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'; // 1 - importanto imagem e o touchableopacity que é um tipo de botão
import Cronometro from './assets/cronometro.png';
 
class App extends Component {

  constructor(props){
    super(props);
    this.state = {   // 2 - states iniciais 
      numero: 0,
      botao: 'Go',
      ultimoTempo: null // 8 - state criacao historico de ultimo tempo usado, state inical em null
    }
    //timer é a variavel do relogio
    this.timer = null; // 3 - variavel para pausar o setInterval consequentemente pausar o relogio *obs toda vez que começa o app o timer esta null
    this.go = this.go.bind(this);   // 2 linkando o this.go com a funcao go  atravez da bind
    this.stop = this.stop.bind(this); // 2 linkando o this.stop com a funcao stop atravez da bind
  }

  go(){  // 3 funcao go para alterar state numero

    if (this.timer != null){ // 4 se for diferente de null ou seja esta rodando o relogio
      // 5 aqui vai PARAR o TIMER
      clearInterval(this.timer); // 5 limpa o intervalo e pausa
      this.timer = null; // 5 e  timer volta a ser null
      this.setState({botao: 'Go'}) // 6 - alteracao de state botao de STOP vai para GO quando estiver em pausa
      
    }else {
      // 6 começa a GIRAR o TIMER
      this.timer = setInterval(() => {  // 3 - setInterval  executa uma função ou instrução várias vezes em um determinado intervalo de tempo no caso a cada 100 milesimos de segundos
                                       // 4 this timer state para pausar
        this.setState({numero: this.state.numero + 0.1}) // 3  pega state numero que no caso é  0.0 e soma com  0.1 e fazendo em looping por causa do setInternal
      }, 100); // 3 - de quantos milissegundos ele vai repetir o setInterval

      this.setState({botao: 'Stop'}) // 6 - alteracao de state botao stop quando estiver rodando 
    }
  };


  stop(){

    if(this.timer != null){ // 7 se timer for diferente de null ou seja se estiver rodando
      // 8 vai limpar o tempo
      clearInterval(this.timer); // 7 - limpa o interval e pausa
      this.timer = null; // 7 - e  timer volta a ser null
      
    }
    this.setState({
      numero: 0,   // 7 e setState numero recebe 0 
      ultimoTempo: 'Último tempo ' + this.state.numero.toFixed(2) + 's',  // 8 pega o valor da state ultimoTempo e altera pelo seState para o novo valor
    })

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
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.stop} /* 2 acao de pressionar e chamar o state stop */>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerHistorico}> 
          {/* 8 container com texto que recebe a state do ultimo tempo */}
          <Text  style={styles.textHistorico}>{this.state.ultimoTempo}</Text>
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
  },
  containerHistorico:{
    marginTop: 40,
  },
  textHistorico:{
    fontSize: 25,
    fontStyle: 'italic',
    color:'#FFF'

  }
});

export default App;