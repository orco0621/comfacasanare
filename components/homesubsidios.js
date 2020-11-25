import React  from 'react';
import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native';
import Encabezado from './encabezado';
import Constants from 'expo-constants';
import Pie from './pie';

const {width}= Dimensions.get("window")
export default function HomeSubsidios ({navigation, route}){
    const [infoSubsidio,setInfoSubsidio] = React.useState(route.params.infoSubsidio)
    const [infoCuota,setInfoCuota]=React.useState(route.params.infoCuota)
    
return (
        <View style={{marginTop: Constants.statusBarHeight, alignItems: 'center', flex: 1,}}>
            <Encabezado titulo="Subsidios" atras={true} navigation={navigation}/>
            <ScrollView style={{}}>
            <Image source={require("../assets/logo_comfa.png")} style={{width, height: 250, resizeMode: 'stretch',}} />
            <Text style={{color:"black", fontSize: 22, fontWeight: "bold", textAlign: "center"}}> {"\n"}Comfacasanare ofrece para sus afiliados beneficios para mejorar su calidad de vida, conoce la información pertinente a la cuota monetaria y el subsidio de vivienda.{"\n"}</Text>
            <TouchableOpacity onPress={() => navigation.push('Subsidio',{infoSubsidio:infoSubsidio})}><View style={{flex:1, height:120, alignItems:"center", justifyContent:"center", borderWidth: 4, borderRadius: 6, backgroundColor: "#005194", borderColor: "black"}}><Text style={{color:"white", fontSize: 20, fontWeight: "bold"}}>Subsidio Vivienda</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push('CuotaMonetaria',{infoCuota:infoCuota})}><View style={{flex:1, height:120, alignItems:"center", justifyContent:"center", borderWidth: 4, borderRadius: 6, backgroundColor: "#f3d20d", borderColor: "white"}}><Text style={{color:"white", fontSize: 20, fontWeight: "bold"}}>Subsidio Familiar</Text></View></TouchableOpacity>
            <Pie/>
            </ScrollView> 
        </View>
) }