import { StyleSheet, Text,View } from 'react-native';


export default function App(props) {
    function total() {
        if (props.Lista[props.Id].Tipo == "Compras") {
            const ValorSemFormatação = props.Lista[props.Id].Orçamento.replace('R$', '').replace(',', '.').replace('.', '.')
            const Total = parseFloat(((ValorSemFormatação)-(props.Tt)).toFixed(2))
            
            return(
                <View style={styles.BoxSaldo}>
                    <Text>Saldo restante R$:{Total}</Text>
                </View>
                )
        }
    }

    return(
        <View>
            {total()}
        </View>
    )
    
}

const styles = StyleSheet.create({

   BoxSaldo:{
    backgroundColor:'#ea526f',
    alignItems:"center",
    padding:8
   }
})