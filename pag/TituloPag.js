import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function App(props) {

  function voltar(params) {
    props.setPagina(params)
  }

  if (props.Peg == "HOME") {
    return (
      <View style={styles.container}>
        <Text style={styles.TXT}>{props.Peg}</Text>
      </View>
    );
  }else if (props.Voltar=="HOME") {
    return (
      <View style={[styles.container,styles.TituloCom2]}>
        <TouchableOpacity  onPress={()=>voltar("HOME")}>
          <AntDesign name="leftcircleo" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.TXT}>{props.Peg}</Text>
      </View>
    );
  }else{    
    return (
      <View style={[styles.container,styles.TituloCom2]}>
        <TouchableOpacity  onPress={()=>voltar("PaginaVerItens")}>
        {/* <TouchableOpacity  onPress={()=>voltar("HOME")}> */}
          <AntDesign name="leftcircleo" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.TXT}>{props.Peg}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:12,
    backgroundColor: '#25ced1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TXT:{
    fontSize:20,
  },
  TituloCom2:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
});
