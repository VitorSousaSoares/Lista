import { StyleSheet, Text, TouchableOpacity, View,FlatList,TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalAdd from './ModalAdd'


export default function App(props) {

 
  const editLista = (Conteudo)=>{
    const index = props.Lista[props.Id].Conteudo.indexOf(Conteudo);
    props.setIdItem(index)
    props.setPagina("PaginaEditItem")
  }  
  
  const delet = async (item) =>{
    let newNota = props.Lista.filter(function(val){
      return val != item;
    });
    props.setLista(newNota);
    try {
      const salvarNota = JSON.stringify(newNota)
      await AsyncStorage.setItem('@Lista', salvarNota)
    } catch (e) {
      // saving error
    }
  }

  const deleItem = async (Conteudo)=>{
    let newNota = props.Lista[props.Id].Conteudo.filter(function(val){
      return val != Conteudo;
    });
    props.Lista[props.Id].Conteudo = newNota
    let neNota = props.Lista
    props.setLista(neNota);
    try {
      const salvarNota = JSON.stringify(neNota)
      await AsyncStorage.setItem('@Lista', salvarNota)
      props.setPagina("AtualizarLista")
    } catch (e) {
      // saving error
    }

  }
 
  const verItens = (item)=>{
    props.setConteudoLista(item)
    const index = props.Lista.indexOf(item);
    props.setId(index)
    props.setPagina("PaginaVerItens")
  }
   
  const renderItem = ({ item }) => {
    if(props.Tipo == "Tudo"){
        return (
          <View style={styles.container}>
            <View style={styles.Lista}>
              <View style={[styles.tag,{backgroundColor:(item.Cor)}]}>
              </View>
              <View style={styles.ListaTXTDELET}>
                <TouchableOpacity onPress={()=>verItens(item)}>
                  <Text style={styles.ListaTXT}>{item.Nome}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> delet(item)}>
                  <AntDesign name="delete" size={30} color="black" /> 
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      };
    if(props.Tipo == "Itens"){
      if (item.Nome === props.Lista[props.Id]["Nome"]) {
        if (props.Lista[props.Id].Tipo == "Compras") {  
          if (props.Lista[props.Id].hasOwnProperty("Conteudo")) {
            return (
              <View style={styles.container}>
                {item.Conteudo.map((Conteudo, index) => (
                <View key={index} style={styles.Itens}>
                  <View style={styles.ItensBox}>
                    <View>
                    <TouchableOpacity 
                      onPress={() => editLista(Conteudo)}
                    >
                      <Text style={styles.ItemNome}>{Conteudo.Item}</Text>
                      <Text >{Conteudo.Local}</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>deleItem(Conteudo)}>
                      <AntDesign name="delete" size={40} color="black" /> 
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.ItensBox,{marginTop:8}]}>
                    <ModalAdd
                      Item = {Conteudo}
                      Lista = {props.Lista}
                      setLista = {props.setLista}
                      setPagina = {props.setPagina}
                    />
                    <Text >Valor: {Conteudo.Valor}</Text>
                    <Text >Quantidade: {Conteudo.Quantidade}</Text>
                  </View>
                </View>
              ))}
              </View>
            );
          } else{
            return(

              <View style={styles.container}>
                <Text style={styles.TXTVazio}>Não a itans na lista, para daicionar itens clique no batão adicionar</Text>
              </View>
            )
          }
        }else if (props.Lista[props.Id].Tipo == "Tarefas") {   
          if (props.Lista[props.Id].hasOwnProperty("Conteudo")) {
          return (
            <View style={styles.container}>
              {item.Conteudo.map((Conteudo, index) => (
              <View key={index} style={styles.Itens}>
                <View style={styles.ItensBox}>
                  <View>
                  <TouchableOpacity 
                    onPress={() => editLista(Conteudo)}
                  >
                    <Text style={styles.ItemNome}>{Conteudo.Item}</Text>
                    <Text >{Conteudo.Local}</Text>
                  </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={()=>deleItem(Conteudo)}>
                    <AntDesign name="delete" size={40} color="black" /> 
                  </TouchableOpacity>
                </View>
                <View style={[styles.ItensBox,{marginTop:8}]}>
                  <ModalAdd
                    Item = {Conteudo}
                    Lista = {props.Lista}
                    setLista = {props.setLista}
                    setPagina = {props.setPagina}
                  />
                  <Text>
                    <AntDesign name="clockcircleo" size={18} color="black" /> - {Conteudo.Hora}
                  </Text>
                  <Text >
                    <AntDesign name="calendar" size={20} color="black" /> - {Conteudo.Dia}
                  </Text>
                </View>
              </View>
            ))}
            </View>
          );
          }else{
            return(
              <View style={styles.container}>
                <Text style={styles.TXTVazio}>Não a itans na lista, para daicionar itens clique no batão adicionar</Text>
              </View>
            )
          }
        }else {   
          if (props.Lista[props.Id].hasOwnProperty("Conteudo")) {
            return (
              <View style={styles.container}>
                {item.Conteudo.map((Conteudo, index) => (
                <View key={index} style={styles.Itens}>
                  <View style={styles.ItensBox}>
                      <ModalAdd
                        Item = {Conteudo}
                        Lista = {props.Lista}
                        setLista = {props.setLista}
                        setPagina = {props.setPagina}
                      />

                    <View style={styles.CheckBox}>
                      <View>
                        <TouchableOpacity 
                          onPress={() => editLista(Conteudo)}
                          >
                          <Text style={styles.ItemNome}>{Conteudo.Item}</Text>
                          <Text >{Conteudo.Local}</Text>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity onPress={()=>deleItem(Conteudo)}>
                        <AntDesign name="delete" size={40} color="black" /> 
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
              </View>
            );
          }else{
            return(
              <View style={styles.container}>
                <Text style={styles.TXTVazio}>Não a itans na lista, para daicionar itens clique no batão adicionar</Text>
              </View>
            )
          }}
      }
        // return null;
      };
    }
    
  
  return (
    <FlatList
      data={props.Lista}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.Nome + index}
    />
  );
  
};


const styles = StyleSheet.create({
    
  container:{
    flex:1,
    width:"95%",
    alignSelf:"center"
  },
  Lista:{
    marginTop:12,
    backgroundColor:"#Fceade",
    flexDirection:"row",
    justifyContent:"space-between",
  },
  tag:{
    width:"5%"
  },
  ListaTXTDELET:{
    width:"95%",
    padding:8,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  ListaTXT:{
    fontSize:20,
  },
  Itens:{
    marginTop:12,
    padding:8,
    backgroundColor:"#Fceade",
  },
  ItensBox:{
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"center"
  },
  ItemNome:{
    fontSize:25
  },
  CheckBox:{
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    width:"85%"
  },
  TXTVazio:{
    textAlign:"center",
    fontSize:20,
    marginTop:"50%",
    width:"80%",
    alignSelf:"center"
  }
});

