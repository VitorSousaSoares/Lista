import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ModalCriar from './pag/ModalCriar'
import Titulo from './pag/TituloPag';
import Base from './pag/BasePag';
import ExibirListas from './pag/ExibirListas';1
import PagAdd from './pag/PagAdd';
import BTNAdd from './pag/BTNAdd';
import PagEdit from './pag/PadEdit';
import Total from './pag/Total';
import Solda from './pag/Saldo'
import ModalOrçamento from './pag/ModalOrçamento'


export default function App() {

  const [Pagina, setPagina] = useState("HOME")
  
  const [Lista, setLista] = useState("")
  const [Id,setId] = useState("")
  const [Tipo,setTipo] = useState("Tudo")
  const [Cor,setCor] = useState("")
  const [Nome,setNome] = useState("")
  const [Orçamento,setOrçamento] = useState("")
  const [ConteudoLista,setConteudoLista] = useState("")
  const [Valor,setValor] = useState("")
  const [Item,setItem] = useState("")
  const [Local,setLocal] = useState("")
  const [Quantidade,setQuantidade] = useState("")
  const [Carinho,setCarinho] = useState("")
  const [IdItem,setIdItem] = useState("")
  const [Obs,setObs] = useState("")
  const [Dia,setDia] = useState("")
  const [Hora,setHora] = useState("")
  const [Tt,setTt] = useState(0)

  const getLista = async () => {
    try {
      const caregarNota = await AsyncStorage.getItem('@Lista')
      return caregarNota != null ? setLista(JSON.parse(caregarNota)) : null;
      
    } catch(e) {
    }
  }
  useEffect(()=>{
    {getLista()}
  },[])

  const atualizar= (pagina) =>{
    setPagina(pagina)
  }

  


  if (Pagina == "HOME") {
    if (Lista == "") {
      return (
        <View style={styles.container}>
          <Titulo Peg="HOME" />
          <View style={styles.Peg}>
            <Text style={styles.TXT}>NÃO HÁ LISTA</Text>
            <Text style={styles.TXTselct}>Clique em uma das opções abaixo para criar a sua lista</Text>
            <View style={styles.Botoes}>
              <ModalCriar
                ico = "shoppingcart"
                Tipo = "Compras"
                Nome={Nome}
                Lista ={Lista}   
                Cor={Cor}  
                Orçamento = {Orçamento}      
                setTipo = {setTipo}
                setCor = {setCor}
                setNome={setNome}
                setOrçamento={setOrçamento}
                setLista = {setLista}
                setPagina={setPagina}
                setId = {setId}
              />
              <ModalCriar
                ico = "bars"
                Tipo = "Check"
                Nome={Nome}
                Lista ={Lista}   
                Cor={Cor}        
                setTipo = {setTipo}
                setCor = {setCor}
                setNome={setNome}
                setOrçamento={setOrçamento}
                setLista = {setLista}
                setPagina={setPagina}
                setId = {setId}
              />
              <ModalCriar
                ico = "tool"
                Tipo = "Tarefas"
                Nome={Nome}
                Lista ={Lista}   
                Cor={Cor}        
                setTipo = {setTipo}
                setCor = {setCor}
                setNome={setNome}
                setOrçamento={setOrçamento}
                setLista = {setLista}
                setPagina={setPagina}
                setId = {setId}
              />
            </View>
          </View>
          <StatusBar hidden />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Titulo Peg="HOME" />
          <View style={styles.Peg}>
          <ExibirListas
            Lista={Lista}
            Id={Id}
            Tipo= {Tipo}
            setLista = {setLista}
            setId={setId}
            setConteudoLista = {setConteudoLista}
            setPagina = {setPagina}
          />
          </View>
          <Base 
            Nome={Nome}
            Lista ={Lista}   
            Cor={Cor}     
            Orçamento = {Orçamento}   
            setTipo = {setTipo}
            setCor = {setCor}
            setNome={setNome}
            setOrçamento={setOrçamento}
            setLista = {setLista}
            setPagina={setPagina}
            setId = {setId}  
          />
          <StatusBar hidden />
        </View>
      );
    }
  }
  if (Pagina == "PaginaAddCompras") {
    return (
      <View style={styles.container}>
        <Titulo 
          Peg={Lista[Id]["Nome"]} 
          setPagina = {setPagina}
          Voltar = {"PaginaVerItens"}
          Lista = {Lista}
          Id={Id}
        />
        <View style={styles.Peg}>
        <PagAdd
          Lista = {Lista}
          Id = {Id}
          Valor ={Valor}
          Item = {Item}
          Local = {Local}
          Quantidade = {Quantidade}
          Carinho = {Carinho}
          Obs = {Obs}
          Dia = {Dia}
          Hora = {Hora}
          setItem = {setItem}
          setLocal = {setLocal}
          setValor = {setValor}
          setQuantidade = {setQuantidade}
          setCarinho = {setCarinho}
          setObs= {setObs}
          setDia = {setDia}
          setHora = {setHora}
        />
        </View>
        <BTNAdd
          Pag = {Lista[Id].Tipo}
          Id = {Id}
          Lista = {Lista}
          Valor ={Valor}
          Item = {Item}
          Local = {Local}
          Quantidade = {Quantidade}
          Carinho = {Carinho}
          Obs = {Obs}
          Dia = {Dia}
          Hora = {Hora}
          setItem = {setItem}
          setLocal = {setLocal}
          setValor = {setValor}
          setQuantidade = {setQuantidade}
          setCarinho = {setCarinho}
          setLista = {setLista}
          setObs= {setObs}
          setDia = {setDia}
          setHora = {setHora}
        />
        <StatusBar hidden />
      </View>
    );
  }
  if (Pagina == "PaginaVerItens") {
    return (
      <View style={styles.container}>
        <Titulo 
          Peg={Lista[Id]["Nome"]} 
          setPagina={setPagina}
          Voltar = "HOME"
        />
        <View style={styles.PegVerItens}>
        <ExibirListas
          Lista={Lista}
          Id={Id}
          Tipo= "Itens"
          setLista = {setLista}
          setId={setId}
          setConteudoLista = {setConteudoLista}
          setPagina = {setPagina}
          setIdItem = {setIdItem}
        />
        </View>
        
        <View style={styles.BoxDinheiro}>
        <ModalOrçamento
          style={styles.BoxOrçamento}
          Nota={Lista}
          setNota = {setLista}
          setId={setId}
          Id={Id}
          Orçamento = {Orçamento}
          setOrçamento = {setOrçamento}
          />

        <Total 
          Lista={Lista} 
          Id={Id}
          Tt = {Tt}
          setTt = {setTt}
          />

        <Solda
          Lista={Lista} 
          Id={Id}
          Tt = {Tt}
          />
        </View>


        <BTNAdd
          Pag = "PaginaAddCompras"
          Tipo = "Add"
          setPagina = {setPagina}
        />
        <StatusBar hidden />
      </View>
    );
  }
  if (Pagina ==="PaginaEditItem") {
    return (
      <View style={styles.container}>
        <Titulo 
          Peg = {Lista[Id].Conteudo[IdItem].Item}
          setPagina = {setPagina}
          Voltar = "PaginaVerItens"
          Id = {Id}
          Lista = {Lista}
        />
        <PagEdit
          setQuantidade={setQuantidade}
          setItem={setItem}
          setValor={setValor}
          setLocal={setLocal}
          setCarinho={setCarinho}
          setObs= {setObs}
          setDia = {setDia}
          setHora = {setHora}
          Obs = {Obs}
          Dia = {Dia}
          Hora = {Hora}
          Carinho={Carinho}
          Valor={Valor}
          Lista = {Lista}
          Id = {Id}
          IdItem = {IdItem}
        />
        < BTNAdd
          IdItem = {IdItem}
          Id={Id}
          Lista={Lista}
          Cor = {Cor}
          Nome={Nome}
          Item={Item}
          Quantidade={Quantidade}
          Valor={Valor}
          Local={Local}
          Carinho={Carinho}
          Obs = {Obs}
          Dia = {Dia}
          Hora = {Hora}
          setObs= {setObs}
          setDia = {setDia}
          setHora = {setHora}
          setLista={setLista}
          setCor = {setCor}
          setPagina={setPagina}
          setNome={setNome}
          setItem={setItem}
          setQuantidade={setQuantidade}
          setValor={setValor}
          setLocal={setLocal}
          setCarinho={setCarinho}
          setId={setId}
          Tipo = "Edit"
        />
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="AtualizarLista") {
    return (
      <View style={styles.container}>
        {
          atualizar("PaginaVerItens")
        }
        <StatusBar hidden />
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  TXT: {
    fontSize: 30,
  },
  TXTselct: {
    width: "70%",
    textAlign: "center"
  },
  Peg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  PegVerItens: {
    flex: 1,
  },
  Botoes: {
    marginTop: 35,
    flexDirection: "row",
    width: "92%",
    justifyContent: "space-between"
  },
  BTN: {
    width: 85,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#Fceade",
    borderRadius: 10,
    elevation: 3,
  },
  BoxDinheiro:{
    padding:8,
    paddingBottom:2
  },

});
