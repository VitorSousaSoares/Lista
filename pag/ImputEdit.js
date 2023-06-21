import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App(props) {

    if (props.Teclado == "numeric") {
        return(
          <View style={[styles.container,styles.TXTNum]}>
              <Text style={styles.TXT}>{props.tag}:</Text>
              <TextInput
                  padding="5%"
                  backgroundColor="#fceade"
                  autoFocus={props.foco}
                  multiline={props.linhas}
                  onChangeText={(text)=>props.setTXT(text)}
                  keyboardType= {props.Teclado}
              >
                  <Text>{props.TXT}</Text>
              </TextInput>
          </View>
        )
    }else{
        return(
          <View style={styles.container}>
              <Text style={styles.TXT}>{props.tag}:</Text>
              <TextInput
                  padding="5%"
                  backgroundColor="#fceade"
                  autoFocus={props.foco}
                  multiline={props.linhas}
                  onChangeText={(text)=>props.setTXT(text)}
              >
                  <Text>{props.TXT}</Text>
              </TextInput>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    
    container:{
        padding:"2%",
        backgroundColor:"#fceade",
        marginTop:8,
      },
      TXT:{
        paddingTop:"1%",
        
      },
      TXTNum:{
        flexDirection:"row",
        alignItems:"center",
        paddingTop:0,
        paddingBottom:0,
        justifyContent:"space-between"
      }
});