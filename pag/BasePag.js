import { StyleSheet, Text, View } from 'react-native';
import BNT from './BTN';

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.TXT}>CRIA NOVA LISTA</Text>
      <BNT 
        Nome={props.Nome}
        Lista ={props.Lista}   
        Cor={props.Cor}     
        Orçamento={props.Orçamento}
        setTipo = {props.setTipo}
        setCor = {props.setCor}
        setNome={props.setNome}
        setOrçamento={props.setOrçamento}
        setLista = {props.setLista}
        setPagina={props.setPagina}
        setId = {props.setId}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:8,
    paddingRight:8,
    height:50,
    backgroundColor: '#25ced1',
    flexDirection:"row",
    justifyContent:"space-between"
  },
  TXT:{
    textAlignVertical:"center",
    fontSize:20,
  },
  BTN:{
    height:50,
    width:50,
    borderRadius:25,
    backgroundColor:"#fff",
    elevation:3
  },
  TXTBNT:{
    width:50,
    height:50,
    textAlign:"center",
    textAlignVertical:"center",
    fontSize:30,
  }

});