import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';


export default function App(props) {
    const [modal,setModal] = useState(false)

   
    const NovoValor = async () =>{
        props.Nota[props.Id].Orçamento = props.Orçamento  

        try {
            const salvarNota = JSON.stringify(props.Nota)
            await AsyncStorage.setItem('@Lista', salvarNota)
        } catch (e) {
        // saving error
        }
        props.setOrçamento("")
        setModal(false)  
    }

    if (props.Nota[props.Id].Tipo =="Compras") {
        
        return(
            <View >
                <Modal
                    visible={modal}
                    animationType="fade"
                    transparent={true}
                >
                    
                    <View style={styles.modal}>
                        <Text style={styles.txtModal}>NOVO ORÇAMENTO</Text>
                        <TextInputMask
                            style={styles.TXTImp}
                            type={'money'}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: 'R$',
                                suffixUnit: ''
                            }}
                            value={props.Orçamento}
                            onChangeText={text => props.setOrçamento(text)}
                            />
                        <TouchableOpacity
                            onPress={()=>NovoValor()}
                            style={styles.BTNCriar}
                            >
                            <Text>EDITAR</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <TouchableOpacity
                    onPress={()=>setModal(true)}
                    style={styles.BoxOrçamento}
                >
                    <Text>ORÇAMENTO: {props.Nota[props.Id].Orçamento}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
    }
    
    const styles = StyleSheet.create({
        
        modal:{
            backgroundColor: "rgba(50,50,50,0.9)",
            width:'90%',
            height:200,
            marginLeft:'5%',
            marginTop:'40%',
            padding:25,
    },
    txtModal:{
        textAlign:"center",
        marginBottom:10,
        fontSize:18,
        color:"#fff"
    },
    TXTImp:{
        backgroundColor:"rgba(255,255,255,0.5)",
        padding:8
    },
    BTNCriar:{
        backgroundColor:"rgb(255,195,119)",
        marginTop:35,
        padding:8,
        alignItems:"center"
    },
    BoxOrçamento:{
        padding:8,
        alignItems:"center",
        backgroundColor:'#Ff8a5b',
        elevation:3,
        marginBottom:2
    }
})