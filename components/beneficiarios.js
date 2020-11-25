import React, { useState }  from 'react';
import { View, Text, ScrollView, Dimensions} from 'react-native';
import { List, Avatar } from 'react-native-paper';
import Encabezado from './encabezado'
import Constants from 'expo-constants';

const {width}= Dimensions.get("window")

const Nombre = (pn, sn, pa, sa) => {
    $pn = pn ? pn : ""
    $sn = sn ? sn : ""
    $pa = pa ? pa : ""
    $sa = sa ? sa : ""

    return $pn+" "+$sn+" "+$pa+" "+$sa
}

const Parentesco = (p) => {
    if(p==1){
        return "Parentesco: Hijo"
    }else if(p==2){
        return "Parentesco: Hermano"
    }else{
        return "Parentesco: Padre"
    }
}

export default function Beneficiarios({navigation, route}){

    const [bene, setBene] = React.useState(route.params.datosUsuario.beneficiarios ? route.params.datosUsuario.beneficiarios : null)
const [expanded, setExpanded] = React.useState(true);

    // React.useEffect( () => {
    //     setBene(route.params.datosUsuario.beneficiarios)
    // }, []);

    return (

        <View style={{marginTop: Constants.statusBarHeight}}>
            <Encabezado titulo="Nucleo Familiar - Usuario" atras={true} navigation={navigation}/>
            <ScrollView style={{}}>

                {
                    // console.log(bene),
                    bene ? 
                    bene.map((item, index)=>{
                        return (    <List.Accordion
                                        key={index}
                                        title={Nombre(item.prinom,item.segnom,item.priape,item.segape)}
                                        left={props => <List.Icon {...props} icon="account" />}>
                                        <List.Item title={"Ultima cuota monetaria: "+item.giros.periodo} />
                                        <List.Item title={"Valor: $"+item.giros.valor} />
                                        <List.Item title={Parentesco(item.parent)} />
                                        <List.Item title={item.sexo == "F" ? "Sexo: Femenino" : "Sexo: Masculino" } />
                                        <List.Item title={route.params.datosUsuario.estado == "A"? "Estado: Activo" : "Estado: Inactivo"} />
                                    </List.Accordion>
                        )
                    })
                    :
                    (
                        <View style={{flex:1, alignItems: "center",  justifyContent: 'center', paddingTop:40, }}>
                            <Text style={{color:"gray", fontSize: 20, fontWeight: "bold"}}>Usted no tiene Beneficiarios</Text>
                        </View>
                    )
                }
            </ScrollView>
            
        </View>
    )}


