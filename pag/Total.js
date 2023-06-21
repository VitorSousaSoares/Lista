import { StyleSheet, Text, View } from 'react-native';


export default function App(props) {
    function total() {
        if (props.Lista[props.Id].Tipo =="Compras") {     
            if (props.Lista[props.Id].hasOwnProperty("Conteudo")){            
                
                let total = props.Lista[props.Id].Conteudo.filter(function(val){
                    return val.Carinho != 0;
                }); 
                
                    
                let som = total.reduce( function( prevVal, elem ) {
                    return prevVal + elem.Total;
                }, 0 );
                const t = parseFloat((som).toFixed(2))
                props.setTt(t)
                return(
                    <View style={styles.modal}>
                        <Text>Total da compra R$:{props.Tt}</Text>
                    </View>
                    )
                
            }
        }
       
    }

    return(
        <View>
            {total()}
        </View>
    )
    
}

const styles = StyleSheet.create({


    modal:{
        padding:8,
        alignItems:"center",
        backgroundColor:'#Fceade',
        marginBottom:2,
        marginTop:2
    },
 
})