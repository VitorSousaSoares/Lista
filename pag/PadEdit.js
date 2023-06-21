import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ImputEdit from './ImputEdit';
import { TextInputMask } from 'react-native-masked-text';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';

export default function App(props) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(Platform.OS === 'android')
    setShow(false);
    setDate(currentDate);

    if (mode ==="date") {
        
        let temDate = new Date(currentDate);
        let fDate = temDate.getDate()+"/"+(temDate.getMonth()+1)+"/"+temDate.getFullYear();
        let dia = fDate.toString();
        props.setDia(fDate)
    }else{
        let temDate = new Date(currentDate);
        let fTime =  temDate.getHours()+":" + temDate.getMinutes();
        let hora = fTime.toString();
        props.setHora(fTime)

    }
};

const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
};

  if (props.Lista[props.Id].Tipo == "Compras") {    
    return(
      <View style={styles.container}>
      
      <ImputEdit
      tag = {"Local"}
      linhas={false}
      foco={false}
      setTXT={props.setLocal}
      TXT={props.Lista[props.Id].Conteudo[props.IdItem].Local}
      />
      
      <ImputEdit
      Teclado = {"numeric"}
      tag = {"Quantidade"}
      linhas={true}
      foco={false}
      setTXT={props.setQuantidade}
      TXT={props.Lista[props.Id].Conteudo[props.IdItem].Quantidade}
      />
      <View style={styles.Valor}>
          <Text>Valor:</Text>
          <TextInputMask
              type={'money'}
              options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: ''
              }}
              value={props.Lista[props.Id].Conteudo[props.IdItem].Valor}
              onChangeText={text => props.setValor(text)}
          />
      </View>
        <View style={styles.BOXSel}>
          <Text style={styles.TXTBOXPIC}>Adicionar ao Carinha:</Text>
          <View style={styles.BOXPIC}>
              <Picker
                  selectedValue={props.Carinho}
                  onValueChange={(itemValue, itemIndex) =>
                  props.setCarinho(itemValue)
                  
              }>
                  <Picker.Item label="NÃO" value="0" style={styles.TXTPIC}/>
                  <Picker.Item label="SIM" value="1" style={styles.TXTPIC}/>
              </Picker>
          </View>
        </View>
      </View>
    )
  }else if (props.Lista[props.Id].Tipo == "Tarefas") {    
    return(
      <View style={styles.container}>
      
      <ImputEdit
      tag = {"Local"}
      linhas={false}
      foco={false}
      setTXT={props.setLocal}
      TXT={props.Lista[props.Id].Conteudo[props.IdItem].Local}
      />
      

        <View style={styles.BOXSel}>
          <Text style={styles.TXTBOXPIC}>Tarefa concluida:</Text>
          <View style={styles.BOXPIC}>
              <Picker
                  selectedValue={props.Carinho}
                  onValueChange={(itemValue, itemIndex) =>
                  props.setCarinho(itemValue)
                  
              }>
                  <Picker.Item label="NÃO" value="0" style={styles.TXTPIC}/>
                  <Picker.Item label="SIM" value="1" style={styles.TXTPIC}/>
              </Picker>
          </View>
        </View>
        <View style={styles.BOXDH}>
          <TouchableOpacity
              onPress={()=> showMode("date")}
              style={styles.DataHora}
          >
              <Text><AntDesign name="calendar" size={24} color="black" style={styles.DataHoraTXT}/></Text>
              <Text style={styles.DataHoraTXT}>{props.Lista[props.Id].Conteudo[props.IdItem].Dia}</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.DataHora}
              onPress={()=> showMode("time")}
          >
              <AntDesign name="clockcircleo" size={24} color="black" style={styles.DataHoraTXT}/>
              <Text style={styles.DataHoraTXT}>{props.Lista[props.Id].Conteudo[props.IdItem].Hora}</Text>
          </TouchableOpacity>
          {
              show && (
                  <DateTimePicker
                  testID='dateTimePicker'
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  />
              )
          }
        </View>
        <ImputEdit
          tag="Obiservação"
          linhas={false}
          foco={false}
          setTXT={props.setObs}
          TXT={props.Lista[props.Id].Conteudo[props.IdItem].Obs}
        />

      </View>
    )
  }else {    
    return(
      <View style={styles.container}>
      
      <ImputEdit
      tag = {"Local"}
      linhas={false}
      foco={false}
      setTXT={props.setLocal}
      TXT={props.Lista[props.Id].Conteudo[props.IdItem].Local}
      />
      

        <View style={styles.BOXSel}>
          <Text style={styles.TXTBOXPIC}>Tarefa concluida:</Text>
          <View style={styles.BOXPIC}>
              <Picker
                  selectedValue={props.Carinho}
                  onValueChange={(itemValue, itemIndex) =>
                  props.setCarinho(itemValue)
                  
              }>
                  <Picker.Item label="NÃO" value="0" style={styles.TXTPIC}/>
                  <Picker.Item label="SIM" value="1" style={styles.TXTPIC}/>
              </Picker>
          </View>
        </View>
        <ImputEdit
          tag="Obiservação"
          linhas={false}
          foco={false}
          setTXT={props.setObs}
          TXT={props.Lista[props.Id].Conteudo[props.IdItem].Obs}
        />

      </View>
    )
  }

}

const styles = StyleSheet.create({
    
  container:{
    width:"90%",
    flex:1,
    alignSelf:"center"
  },
  BOXSel:{
    marginTop:8,
    width:"100%",
    alignSelf:"center",
    backgroundColor:"#fceade",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  BOXPIC:{
      width:120
  },
  TXTPIC:{
    fontSize:14
  },
  TXTBOXPIC:{
      textAlignVertical:"center",
      paddingLeft:8
  },
  Valor:{
    marginTop:8,
    padding:8,
    backgroundColor:"#fceade",
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  BOXDH:{
    backgroundColor:"#fceade",
    width:"100%",
    flexDirection:"row",
    marginBottom:5,
    marginTop:8,
    justifyContent:"space-between",
    alignSelf:"center"

},
DataHora:{
    backgroundColor:"#fceade",
    width:"48%",
    alignItems:"center",
    borderRadius:10,
    paddingBottom:8,
    paddingTop:8
},
DataHoraTXT:{
    padding:2,
}
});