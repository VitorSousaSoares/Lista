import { StyleSheet, Text, TouchableOpacity, View, Modal, TextInput,Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';


export default function App(props) {
    const [modal,setModal] = useState(false)


    const Nomear = async ()=> {
        if (props.Nome =="") {
            Alert.alert("Nome","O nome deve ser preenchido")
        
        }else if (props.Orçamento == "") {
            Alert.alert("Orçamento","O orçamento deve ser preenchido")
        
        }else{
            if (props.Tipo == "Compras") {
                const newt = {Tipo:props.Tipo,Cor:props.Cor,Nome:props.Nome,Orçamento:props.Orçamento}
                const novo = [...props.Lista,newt]
                props.setLista(novo);
                try {
                    const salvarNota = JSON.stringify(novo)
                    await AsyncStorage.setItem('@Lista', salvarNota)
                } catch (e) {
                    // saving error
                }
                
                const  id=props.Lista.length;
                props.setId(id)
                props.setOrçamento("")
                props.setPagina("PaginaAddCompras")
            }else if (props.Tipo == "Check") {
                const newt = {Tipo:props.Tipo,Cor:props.Cor,Nome:props.Nome}
                const novo = [...props.Lista,newt]
                props.setLista(novo);
                try {
                    const salvarNota = JSON.stringify(novo)
                    await AsyncStorage.setItem('@Lista', salvarNota)
                } catch (e) {
                    // saving error
                }
                
                const  id=props.Lista.length;
                props.setId(id)
                props.setPagina("PaginaAddCompras")
            }else {
                const newt = {Tipo:props.Tipo,Cor:props.Cor,Nome:props.Nome}
                const novo = [...props.Lista,newt]
                props.setLista(novo);
                try {
                    const salvarNota = JSON.stringify(novo)
                    await AsyncStorage.setItem('@Lista', salvarNota)
                } catch (e) {
                    // saving error
                }
                
                const  id=props.Lista.length;
                props.setId(id)
                props.setPagina("PaginaAddCompras")
            }
        }
    }
    
    if (props.Lista =="") {
        if (props.Tipo =="Compras") {   
            return(
                <View style={styles.container}>
                    <Modal
                        visible={modal}
                        animationType="fade"
                        transparent={true}
                    >
                        
                        <View style={styles.modal}>
                            <TouchableOpacity style={styles.Fechar} onPress={()=>setModal(false)}>
                                <Text>X</Text>
                            </TouchableOpacity>
                            <Text style={styles.txtModal}>Digite o nome da lista:</Text>
                            <TextInput
                                placeholder='Nome'
                                onChangeText={(text)=>props.setNome(text)}
                                style={styles.TXTImp}
                            />
                            <Text style={styles.txtCor}>SELECIONE UM COR</Text>
                            <View style={styles.BoxCor}>
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#25ced1'}]}
                                    onPress={()=>props.setCor('#25ced1')}
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#Fceade'}]}
                                    onPress={()=>props.setCor('#Fceade')}    
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#Ff8a5b'}]}
                                    onPress={()=>props.setCor('#Ff8a5b')}    
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#ea526f'}]}
                                    onPress={()=>props.setCor('#ea526f')}    
                                />
                            </View>
                            <Text style={styles.txtCor}>DIGITE O ORÇAMENTO</Text>
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
                                onPress={()=>Nomear()}
                                style={styles.BTNCriar}
                            >
                                <Text>CRIAR</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <TouchableOpacity 
                        style={styles.BTN}
                        onPress={()=>setModal(true)}
                    >
                        <Text><AntDesign name={props.ico} size={24} color="black" /></Text>
                        <Text>{props.Tipo}</Text>
                    </TouchableOpacity>
                
                </View>
            )
        }
        if (props.Tipo =="Check") {   
            return(
                <View style={styles.container}>
                    <Modal
                        visible={modal}
                        animationType="fade"
                        transparent={true}
                    >
                        
                        <View style={[styles.modal,{height:300,marginTop:"50%"}]}>
                            <TouchableOpacity style={styles.Fechar} onPress={()=>setModal(false)}>
                                <Text>X</Text>
                            </TouchableOpacity>
                            <Text style={styles.txtModal}>Digite o nome da lista:</Text>
                            <TextInput
                                placeholder='Nome'
                                onChangeText={(text)=>props.setNome(text)}
                                style={styles.TXTImp}
                            />
                            <Text style={styles.txtCor}>SELECIONE UM COR</Text>
                            <View style={styles.BoxCor}>
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#25ced1'}]}
                                    onPress={()=>props.setCor('#25ced1')}
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#Fceade'}]}
                                    onPress={()=>props.setCor('#Fceade')}    
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#Ff8a5b'}]}
                                    onPress={()=>props.setCor('#Ff8a5b')}    
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#ea526f'}]}
                                    onPress={()=>props.setCor('#ea526f')}    
                                />
                            </View>
                            <TouchableOpacity
                                onPress={()=>Nomear()}
                                style={styles.BTNCriar}
                            >
                                <Text>CRIAR</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <TouchableOpacity 
                        style={styles.BTN}
                        onPress={()=>setModal(true)}
                    >
                        <Text><AntDesign name={props.ico} size={24} color="black" /></Text>
                        <Text>{props.Tipo}</Text>
                    </TouchableOpacity>
                
                </View>
            )
        }
        if (props.Tipo =="Tarefas") {   
            return(
                <View style={styles.container}>
                    <Modal
                        visible={modal}
                        animationType="fade"
                        transparent={true}
                    >
                        
                        <View style={[styles.modal,{height:300,marginTop:"50%"}]}>
                            <TouchableOpacity style={styles.Fechar} onPress={()=>setModal(false)}>
                                <Text>X</Text>
                            </TouchableOpacity>
                            <Text style={styles.txtModal}>Digite o nome da lista:</Text>
                            <TextInput
                                placeholder='Nome'
                                onChangeText={(text)=>props.setNome(text)}
                                style={styles.TXTImp}
                            />
                            <Text style={styles.txtCor}>SELECIONE UM COR</Text>
                            <View style={styles.BoxCor}>
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#25ced1'}]}
                                    onPress={()=>props.setCor('#25ced1')}
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#Fceade'}]}
                                    onPress={()=>props.setCor('#Fceade')}    
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#Ff8a5b'}]}
                                    onPress={()=>props.setCor('#Ff8a5b')}    
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#ea526f'}]}
                                    onPress={()=>props.setCor('#ea526f')}    
                                />
                            </View>
                            <TouchableOpacity
                                onPress={()=>Nomear()}
                                style={styles.BTNCriar}
                            >
                                <Text>CRIAR</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <TouchableOpacity 
                        style={styles.BTN}
                        onPress={()=>setModal(true)}
                    >
                        <Text><AntDesign name={props.ico} size={24} color="black" /></Text>
                        <Text>{props.Tipo}</Text>
                    </TouchableOpacity>
                
                </View>
            )
        }
    }else{
        if (props.Tipo =="Compras") {   
            return(
                <View style={styles.container}>
                    <Modal
                        visible={modal}
                        animationType="fade"
                        transparent={true}
                    >
                        
                        <View style={styles.modal}>
                            <TouchableOpacity style={styles.Fechar} onPress={()=>setModal(false)}>
                                <Text>X</Text>
                            </TouchableOpacity>
                            <Text style={styles.txtModal}>Digite o nome da lista:</Text>
                            <TextInput
                                placeholder='Nome'
                                onChangeText={(text)=>props.setNome(text)}
                                style={styles.TXTImp}
                            />
                            <Text style={styles.txtCor}>SELECIONE UM COR</Text>
                            <View style={styles.BoxCor}>
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#25ced1'}]}
                                    onPress={()=>props.setCor('#25ced1')}
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#Fceade'}]}
                                    onPress={()=>props.setCor('#Fceade')}    
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#Ff8a5b'}]}
                                    onPress={()=>props.setCor('#Ff8a5b')}    
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#ea526f'}]}
                                    onPress={()=>props.setCor('#ea526f')}    
                                />
                            </View>
                            <Text style={styles.txtCor}>DIGITE O ORÇAMENTO</Text>
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
                                onPress={()=>Nomear()}
                                style={styles.BTNCriar}
                            >
                                <Text>CRIAR</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <TouchableOpacity 
                        onPress={()=>setModal(true)}
                    >
                        <Text><AntDesign name="shoppingcart" size={24} color="black" /></Text>
                    </TouchableOpacity>
                
                </View>
            )
        }
        if (props.Tipo =="Check") {   
            return(
                <View style={styles.container}>
                    <Modal
                        visible={modal}
                        animationType="fade"
                        transparent={true}
                    >
                        
                        <View style={[styles.modal,{height:300,marginTop:"50%"}]}>
                            <TouchableOpacity style={styles.Fechar} onPress={()=>setModal(false)}>
                                <Text>X</Text>
                            </TouchableOpacity>
                            <Text style={styles.txtModal}>Digite o nome da lista:</Text>
                            <TextInput
                                placeholder='Nome'
                                onChangeText={(text)=>props.setNome(text)}
                                style={styles.TXTImp}
                            />
                            <Text style={styles.txtCor}>SELECIONE UM COR</Text>
                            <View style={styles.BoxCor}>
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#25ced1'}]}
                                    onPress={()=>props.setCor('#25ced1')}
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#Fceade'}]}
                                    onPress={()=>props.setCor('#Fceade')}    
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#Ff8a5b'}]}
                                    onPress={()=>props.setCor('#Ff8a5b')}    
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#ea526f'}]}
                                    onPress={()=>props.setCor('#ea526f')}    
                                />
                            </View>
                            <TouchableOpacity
                                onPress={()=>Nomear()}
                                style={styles.BTNCriar}
                            >
                                <Text>CRIAR</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <TouchableOpacity 
                        onPress={()=>setModal(true)}
                    >
                        <Text><AntDesign name={props.ico} size={24} color="black" /></Text>
                    </TouchableOpacity>
                
                </View>
            )
        }
        if (props.Tipo =="Tarefas") {   
            return(
                <View style={styles.container}>
                    <Modal
                        visible={modal}
                        animationType="fade"
                        transparent={true}
                    >
                        
                        <View style={[styles.modal,{height:300,marginTop:"50%"}]}>
                            <TouchableOpacity style={styles.Fechar} onPress={()=>setModal(false)}>
                                <Text>X</Text>
                            </TouchableOpacity>
                            <Text style={styles.txtModal}>Digite o nome da lista:</Text>
                            <TextInput
                                placeholder='Nome'
                                onChangeText={(text)=>props.setNome(text)}
                                style={styles.TXTImp}
                            />
                            <Text style={styles.txtCor}>SELECIONE UM COR</Text>
                            <View style={styles.BoxCor}>
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#25ced1'}]}
                                    onPress={()=>props.setCor('#25ced1')}
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#Fceade'}]}
                                    onPress={()=>props.setCor('#Fceade')}    
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#Ff8a5b'}]}
                                    onPress={()=>props.setCor('#Ff8a5b')}    
                                />
                                <TouchableOpacity 
                                    style={[styles.cor,{backgroundColor:'#ea526f'}]}
                                    onPress={()=>props.setCor('#ea526f')}    
                                />
                            </View>
                            <TouchableOpacity
                                onPress={()=>Nomear()}
                                style={styles.BTNCriar}
                            >
                                <Text>CRIAR</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <TouchableOpacity 
                        onPress={()=>setModal(true)}
                    >
                        <Text><AntDesign name={props.ico} size={24} color="black" /></Text>
                    </TouchableOpacity>
                
                </View>
            )
        }

    }
    

}

const styles = StyleSheet.create({

    modal:{
        backgroundColor: "rgba(50,50,50,0.9)",
        width:'84%',
        height:400,
        marginTop:'30%',
        padding:25,
        alignSelf:"center"
    },
    txtModal:{
        textAlign:"center",
        marginBottom:10,
        fontSize:18,
        color:"#fff"
    },
    txtCor:{
        textAlign:"center",
        marginBottom:10,
        marginTop:15,
        fontSize:18,
        color:"#fff"
    },
    Fechar:{
        backgroundColor:"red",
        width:30,
        height:30,
        borderRadius:15,
        alignItems:"center",
        paddingTop:4,
        position:"absolute",
        right:-15,
        top:-15,
        elevation:3
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
    TXTImp:{
        backgroundColor:"rgba(255,255,255,0.5)",
        padding:8
    },
    BTNCriar:{
        backgroundColor:'#Fceade',
        marginTop:35,
        padding:8,
        alignItems:"center"
    },
    cor:{
        width:35,
        height:35,
        backgroundColor:"red"
    },
    BoxCor:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
})