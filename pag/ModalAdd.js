import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';


export default function App(props) {
    const [modal,setModal] = useState(false)

    const sim = async () =>{
        props.Item.Carinho = 1    
        try {
            const salvarNota = JSON.stringify(props.Lista)
            await AsyncStorage.setItem('@Lista', salvarNota)
            props.setPagina("AtualizarLista")
        } catch (e) {
            // saving error
        }
        
        setModal(false) 
        
    }
    const nao = async () =>{
        props.Item.Carinho = 0   
        
        try {
            const salvarNota = JSON.stringify(props.Lista)
            await AsyncStorage.setItem('@Lista', salvarNota)
            props.setPagina("AtualizarLista")

        } catch (e) {
            // saving error
        }
        
        setModal(false)  
    }
    if (props.Item.Carinho == "1") {
        return(
            <View >
                <Modal
                    visible={modal}
                    animationType="fade"
                    transparent={true}
                >
                    
                    <View style={styles.modal}>
                        <Text style={styles.txtModal}>Adicioinar ao carinho?</Text>
                        <View style={styles.BOX}>
                            <TouchableOpacity
                                    onPress={()=>sim()}
                                    style={{width:"50%",margin:5,backgroundColor:'rgb(23,195,178)'}}
                                >
                                    <Text style={styles.TXTBTN}>SIM</Text>
                                </TouchableOpacity>
            
                                <TouchableOpacity
                                    onPress={()=>nao()}
                                    style={{width:"50%",margin:5,backgroundColor:'rgb(254,109,115)'}}
                                    >
                                        <Text style={styles.TXTBTN}>NÃO</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </Modal>
                <TouchableOpacity
                    style={{
                        width: 25,
                        height:25,
                        backgroundColor: "red",
                        borderColor:"#000",
                        borderWidth:2,
                      }}
                    onPress={()=>setModal(true)}
                >
                </TouchableOpacity>
            </View>
        )
    }else{
        return(
            <View >
                <Modal
                    visible={modal}
                    animationType="fade"
                    transparent={true}
                >
                    
                    <View style={styles.modal}>
                        <Text style={styles.txtModal}>Adicioinar ao carinho?</Text>
                        <View style={styles.BOX}>
                        
    
                            <TouchableOpacity
                                onPress={()=>sim()}
                                style={{width:"50%",margin:5,backgroundColor:'rgb(23,195,178)'}}
                            >
                                 <Text style={styles.TXTBTN}>SIM</Text>
                            </TouchableOpacity>
        
                            <TouchableOpacity
                                onPress={()=>nao()}
                                style={{width:"50%",margin:5,backgroundColor:'rgb(254,109,115)'}}
                                >
                                    <Text style={styles.TXTBTN}>NÃO</Text>
                            </TouchableOpacity>
    
                       
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity
                    style={{
                        width: 25,
                        height:25,
                        backgroundColor: props.Cor,
                        borderColor:"#000",
                        borderWidth:2,
                      }}
                    onPress={()=>setModal(true)}
                >
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    modal:{
        backgroundColor: "rgba(50,50,50,0.9)",
        width:'90%',
        height:150,
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
    BOX:{
        width:"90%",
        flexDirection:"row"
        
    },
    TXTBTN:{
        textAlign:"center",
        paddingBottom:12,
        paddingTop:12
    }
})