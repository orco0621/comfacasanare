import React, { useState }  from 'react';
import { View, Text, ScrollView, Dimensions} from 'react-native';
import { List, Avatar } from 'react-native-paper';
import Encabezado from './encabezado'
import Constants from 'expo-constants';

const {width}= Dimensions.get("window")

export default function Perfil({navigation, route}){

const [expanded, setExpanded] = React.useState(true);

    return (

        <View style={{marginTop: Constants.statusBarHeight, alignItems: 'center', flex: 1}}>
            <Encabezado titulo="Usuario" atras={true} navigation={navigation}/>
            <ScrollView style={{width}}>
            <List.Accordion
                title="Datos Personales"
                left={props => <List.Icon {...props} icon="account" />}>
                <List.Item title={"Nombre: "+route.params.datosUsuario.prinom+" "+route.params.datosUsuario.segnom} />
                <List.Item title={"Apellido: "+route.params.datosUsuario.priape+" "+route.params.datosUsuario.segape}/>
            </List.Accordion>

            <List.Accordion
                title="Afiliación"
                left={props => <List.Icon {...props} icon="file-document" />}>
                <List.Item title="Empresa: " />
                <List.Item title={route.params.datosUsuario.empresa.razsoc} />
                <List.Item title={"Fecha de Afiliación: "+route.params.datosUsuario.fecsal}/>
                <List.Item title={route.params.datosUsuario.estado == "A"? "Estado: ACTIVO": "Estado: INACTIVO"}/>
            </List.Accordion>
            
            </ScrollView>
            
        </View>
    )}


