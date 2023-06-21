import React,{ useState} from "react";
import { TouchableOpacity, View, StyleSheet,Animated,Text} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import ModalCriar from './ModalCriar';

export default function FloatingButton(props){
    const [rotateAnimation] = useState(new Animated.Value(0));
    const [PaginaNota] = useState(new Animated.Value(10));
    const [PaginaLista] = useState(new Animated.Value(10));
    const [PaginaTerafas] = useState(new Animated.Value(10));
    const [TXTTAREFAS] = useState (new Animated.Value(0));
    const [TXTLISTA] = useState (new Animated.Value(0));
    const [TXTCHACK] = useState (new Animated.Value(0));
    
    const [Menu,setMenu] = useState(false);
    
    const AbrirMenu = ()=>{
        setMenu(true);
        Animated.timing(rotateAnimation,{
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
        Animated.sequence([
            Animated.timing(PaginaNota,{
                toValue:115,
                duration:500,
                useNativeDriver:false,
            }),
            Animated.timing(TXTCHACK,{
                toValue:1,
                duration:500,
                useNativeDriver:false,
            }),
        ]).start();
        Animated.sequence([
            Animated.timing(PaginaLista,{
                toValue:65,
                duration:500,
                useNativeDriver:false,
            }),
            Animated.timing(TXTLISTA,{
                toValue:1,
                duration:500,
                useNativeDriver:false,
            }),
        ]).start();
        Animated.sequence([
            Animated.timing(PaginaTerafas,{
                toValue:165,
                duration:500,
                useNativeDriver:false,
            }),
            Animated.timing(TXTTAREFAS,{
                toValue:1,
                duration:500,
                useNativeDriver:false,
            }),
        ]).start();
    }
    
    const FecharMenu = ()=>{
        setMenu(false);
        Animated.timing(rotateAnimation,{
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
        Animated.timing(PaginaNota,{
            toValue:10,
            duration:500,
            useNativeDriver:false,
        }).start();
        Animated.timing(PaginaLista,{
            toValue:10,
            duration:500,
            useNativeDriver:false,
        }).start();
        Animated.timing(PaginaTerafas,{
            toValue:10,
            duration:500,
            useNativeDriver:false,
        }).start();
        Animated.timing(TXTTAREFAS,{
            toValue:0,
            duration:0,
            useNativeDriver:false,
        }).start();
        Animated.timing(TXTLISTA,{
            toValue:0,
            duration:0,
            useNativeDriver:false,
        }).start();
        Animated.timing(TXTCHACK,{
            toValue:0,
            duration:0,
            useNativeDriver:false,
        }).start();
    }

    const rotateInterpolate = rotateAnimation.interpolate({
        inputRange:[0,1],
        outputRange:["0deg","45deg"],
    });

    const animatedStyle = {
        transform:[{rotate:rotateInterpolate}], 
    }
    
    return(
        <View style={styles.container}>
            <Animated.View style={{opacity: TXTTAREFAS}}>
                <Text style={styles.TXTMENU}>TAREFAS</Text>
            </Animated.View>
            <Animated.View style={{opacity: TXTLISTA}}>
                <Text style={[styles.TXTMENU,{bottom:142,right:25}]}>COMPRAS</Text>
            </Animated.View>
            <Animated.View style={{opacity: TXTCHACK}}>
                <Text style={[styles.TXTMENU,{bottom:128,right:35,width:130}]}>CHECK LIST</Text>
            </Animated.View>
            <Animated.View style={[styles.Menu,{bottom:PaginaNota}]}>
                <ModalCriar
                    ico = "shoppingcart"
                    Tipo = "Compras"
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
            </Animated.View>
            <Animated.View style={[styles.Menu,{bottom:PaginaLista}]}>
            <ModalCriar
                    ico = "bars"
                    Tipo = "Check"
                    Nome={props.Nome}
                    Lista ={props.Lista}   
                    Cor={props.Cor}        
                    setTipo = {props.setTipo}
                    setCor = {props.setCor}
                    setNome={props.setNome}
                    setOrçamento={props.setOrçamento}
                    setLista = {props.setLista}
                    setPagina={props.setPagina}
                    setId = {props.setId} 
                />
            </Animated.View>
            <Animated.View style={[styles.Menu,{bottom:PaginaTerafas}]}>
            <ModalCriar
                ico = "tool"
                Tipo = "Tarefas"
                Nome={props.Nome}
                Lista ={props.Lista}   
                Cor={props.Cor}        
                setTipo = {props.setTipo}
                setCor = {props.setCor}
                setNome={props.setNome}
                setOrçamento={props.setOrçamento}
                setLista = {props.setLista}
                setPagina={props.setPagina}
                setId = {props.setId} 
                />
            </Animated.View>
            <TouchableOpacity
                style={[styles.Menu, {width:56,height:56,borderRadius:28,bottom:5,right:5}]}
                onPress={()=>{Menu === false ? AbrirMenu() : FecharMenu()}}
                activeOpacity={0.9}
            >
                <Animated.View style={[animatedStyle]} >
                    <AntDesign name="plus" size={40} color="black" />
                </Animated.View>
            </TouchableOpacity>
 
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Menu:{
        position:"absolute",
        bottom:10,
        right:10,
        paddingTop:1,
        borderRadius:23,
        width:46,
        height:46,
        backgroundColor:"#Fceade",
        elevation:3,
        justifyContent:"center",
        alignItems:"center"
    },
    TXTMENU:{
        fontSize:15,
        bottom:155,
        right:15,
        backgroundColor:'#Fceade',
        width:120,
        height:36,
        textAlignVertical:"center",
        paddingLeft:10,
        borderRadius:18
    }
})