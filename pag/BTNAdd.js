import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App(props) {

    const adicionar = async () =>{
        if (props.Item === ""){
            Alert.alert("NOME","O nome deve ser preenchido")
        }else{
            const NovaNota = [...props.Lista];
            
            if (NovaNota[props.Id].hasOwnProperty('Conteudo')) {
                const Itens = {Item:props.Item,Local:props.Local,Carinho:props.Carinho,Obs:props.Obs}
                const  id=props.Lista[props.Id].Conteudo.length;
                NovaNota[props.Id].Conteudo[id] =Itens                
                
                try {
                    const salvarNota = JSON.stringify(NovaNota)
                    await AsyncStorage.setItem('@Lista', salvarNota)
                } catch (e) {
                    // saving error
                }
                props.setItem("")
                props.setLocal("")
                props.setCarinho("0")
                props.setObs("")  
                Alert.alert("ADICIONADO","O item " + props.Item + " foi adicinado")
                
            } else {                                    
                const Itens = [{Item:props.Item,Local:props.Local,Carinho:props.Carinho,Obs:props.Obs}]
                NovaNota[props.Id].Conteudo = Itens;
                props.setLista(NovaNota)
                
                try {
                    const salvarNota = JSON.stringify(NovaNota)
                    await AsyncStorage.setItem('@Lista', salvarNota)
                } catch (e) {
                    // saving error
                }
                props.setItem("")
                props.setLocal("")
                props.setCarinho("0")
                props.setObs("")                      
                Alert.alert("ADICIONADO","O item " + props.Item + " foi adicinado")
            }
        }
    }
    const adicionarItemLista = async () =>{
        if (props.Item === ""){
            Alert.alert("NOME","O nome deve ser preenchido")
        }else{
            const NovaNota = [...props.Lista];
            
            if (NovaNota[props.Id].hasOwnProperty("Conteudo")) {
                const ValorSemFormatação = props.Valor.replace('R$', '').replace(',', '.').replace('.', '.')
                const Itens = {Item:props.Item,Local:props.Local,Valor:props.Valor,Quantidade:props.Quantidade,Carinho:props.Carinho,Total:parseFloat(((props.Quantidade)*(ValorSemFormatação)).toFixed(2))}
                const  id=props.Lista[props.Id].Conteudo.length;
                NovaNota[props.Id].Conteudo[id]=Itens
                try {
                    const salvarNota = JSON.stringify(NovaNota)
                    await AsyncStorage.setItem('@Lista', salvarNota)
                } catch (e) {
                    // saving error
                }
                props.setItem("")
                props.setQuantidade("")
                props.setValor("")
                props.setLocal("")
                props.setCarinho("0")  
                Alert.alert("ADICIONADO","O item " + props.Item + " foi adicinado")
                
            } else {                    
                
                const ValorSemFormatação = props.Valor.replace('R$', '').replace(',', '.').replace('.', '.')
                const Itens = [{Item:props.Item,Local:props.Local,Valor:props.Valor,Quantidade:props.Quantidade,Carinho:props.Carinho,Total:parseFloat(((props.Quantidade)*(ValorSemFormatação)).toFixed(2))}]
                NovaNota[props.Id].Conteudo = Itens;
                props.setLista(NovaNota)
                try {
                    const salvarNota = JSON.stringify(NovaNota)
                    await AsyncStorage.setItem('@Lista', salvarNota)
                } catch (e) {
                    // saving error
                }
                props.setItem("")
                props.setQuantidade("")
                props.setValor("")
                props.setLocal("")
                props.setCarinho("0")                    
                Alert.alert("ADICIONADO","O item " + props.Item + " foi adicinado")
            }
        }
    }
    const adicionarTarefas = async () =>{
        if (props.Item === ""){
            Alert.alert("NOME","O nome deve ser preenchido")
        }else{
            const NovaNota = [...props.Lista];
            
            if (NovaNota[props.Id].hasOwnProperty('Conteudo')) {
                const Itens = {Item:props.Item,Local:props.Local,Carinho:props.Carinho,Hora:props.Hora,Dia:props.Dia,Obs:props.Obs}
                const  id=props.Lista[props.Id].Conteudo.length;
                NovaNota[props.Id].Conteudo[id] =Itens                
                
                try {
                    const salvarNota = JSON.stringify(NovaNota)
                    await AsyncStorage.setItem('@Lista', salvarNota)
                } catch (e) {
                    // saving error
                }
                props.setItem("")
                props.setDia("0")
                props.setHora("0")
                props.setLocal("")
                props.setCarinho("0")
                props.setObs("")  
                Alert.alert("ADICIONADO","O item " + props.Item + " foi adicinado")
                
            } else {                                    
                const Itens = [{Item:props.Item,Local:props.Local,Carinho:props.Carinho,Hora:props.Hora,Dia:props.Dia,Obs:props.Obs}]
                NovaNota[props.Id].Conteudo = Itens;
                props.setLista(NovaNota)
                
                try {
                    const salvarNota = JSON.stringify(NovaNota)
                    await AsyncStorage.setItem('@Lista', salvarNota)
                } catch (e) {
                    // saving error
                }
                props.setItem("")
                props.setDia("0")
                props.setHora("0")
                props.setLocal("")
                props.setCarinho("0")
                props.setObs("")                      
                Alert.alert("ADICIONADO","O item " + props.Item + " foi adicinado")
            }
        }
    }
    const Irpara=()=>{
        props.setPagina(props.Pag)
    }
    const editar = async ()=>{
        if (props.Lista[props.Id].Tipo == "Compras") {     
            const NovaNota = [...props.Lista];
            if (props.Local != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Local = props.Local;
            }
            if (props.Quantidade != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Quantidade = props.Quantidade;
            }
            if (props.Valor != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Valor = props.Valor;
            }
            if (props.Carinho != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Carinho = props.Carinho;
            }
            
            const ValorSemFormatação = NovaNota[props.Id].Conteudo[props.IdItem].Valor.replace('R$', '').replace(',', '.').replace('.', '.')
            NovaNota[props.Id].Conteudo[props.IdItem].Total = ValorSemFormatação*NovaNota[props.Id].Conteudo[props.IdItem].Quantidade
            props.setLista(NovaNota)
            
            try {
                const salvarNota = JSON.stringify(NovaNota)
                await AsyncStorage.setItem('@Lista', salvarNota)
            } catch (e) {
                    // saving error
            }
            props.setPagina("PaginaVerItens")
            props.setItem("")
            props.setQuantidade("")
            props.setValor("")
            props.setLocal("")
            props.setCarinho("0")
        }else if (props.Lista[props.Id].Tipo == "Tarefas") {     
            const NovaNota = [...props.Lista];
            if (props.Local != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Local = props.Local;
            }
            if (props.Carinho != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Carinho = props.Carinho;
            }
            if (props.Hora != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Hora = props.Hora;
            }
            if (props.Dia != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Dia = props.Dia;
            }
            if (props.Obs != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Obs = props.Obs;
            }
            
            props.setLista(NovaNota)
            
            try {
                const salvarNota = JSON.stringify(NovaNota)
                await AsyncStorage.setItem('@Lista', salvarNota)
            } catch (e) {
                    // saving error
            }
            props.setPagina("PaginaVerItens")
            props.setItem("")
            props.setDia("")
            props.setHora("")
            props.setObs("")
            props.setLocal("")
            props.setCarinho("0")
        }else {     
            const NovaNota = [...props.Lista];
            if (props.Local != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Local = props.Local;
            }
            if (props.Carinho != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Carinho = props.Carinho;
            }
            if (props.Obs != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Obs = props.Obs;
            }
            
            props.setLista(NovaNota)
            
            try {
                const salvarNota = JSON.stringify(NovaNota)
                await AsyncStorage.setItem('@Lista', salvarNota)
            } catch (e) {
                    // saving error
            }
            props.setPagina("PaginaVerItens")
            props.setItem("")
            props.setObs("")
            props.setLocal("")
            props.setCarinho("0")
        }
    }

    if (props.Pag === "Check") {        
        return(
            <View >
                <TouchableOpacity 
                    style={styles.TXTBTN}
                    onPress={()=>adicionar(props.Pag)}
                >
                    <Text style={styles.TXT}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else if (props.Pag ==="Compras"){
        return(
            <View >
                <TouchableOpacity 
                    style={styles.TXTBTN}
                    onPress={()=>adicionarItemLista(props.Pag)}
                >
                    <Text style={styles.TXT}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else if (props.Pag === "Tarefas"){
        return(
            <View >
                <TouchableOpacity 
                    style={styles.TXTBTN}
                    onPress={()=>adicionarTarefas(props.tipo)}
                >
                    <Text style={styles.TXT}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else if( props.Tipo ==="Add"){
        return(
            <View >
                <TouchableOpacity 
                    style={styles.TXTBTN}
                    onPress={()=>Irpara(props.tipo)}
                >
                    <Text style={styles.TXT}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else if( props.Tipo ==="Edit"){
        return(
            <View >
                <TouchableOpacity 
                    style={styles.TXTBTN}
                    onPress={()=>editar()}
                >
                    <Text style={styles.TXT}>CONCLUIR</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({


    TXTBTN:{
        backgroundColor: "#Ff8a5b",
        padding:12,
        alignItems:"center",
    },
    TXT:{
        fontSize:18
    }
});


