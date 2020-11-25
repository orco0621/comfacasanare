import React from 'react';
import { View, Text, Dimensions, Image, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Encabezado from './encabezado';
import Constants from 'expo-constants';
import Pie from './pie';

const {width}= Dimensions.get("window")
export default function Login({navigation}){
    const [usuario, setUsuario] = React.useState('');
    const [password, setPassword] = React.useState('');
    const validacion= async ()=>{
    const response = await fetch('https://appcomfa.tk/api/Login.php?cedula='+usuario+'&pass='+password)
    const data = await response.text()
    // console.log(data)
        if(data==1){
            fetch('https://appcomfa.tk/api/datosusuario.php?cedula='+usuario)
      .then(
        response => response.json()
      )
      .then(
        data=>navigation.push('Home', {
            cedula: usuario,
            loged: true,
            data
          })
      )
            
        }else{
            alert("No se puede iniciar sesión, puede que no este registrado o que no este afiliado a Comfacasanare, intente nuevamente")
        }
    }

    return (
        <View style={{marginTop: Constants.statusBarHeight, alignItems: 'center', flex: 1,}}>
            <Encabezado titulo="Login" atras={true} navigation={navigation}/>
            
            <ScrollView style={{marginTop:4, width}}>
            <Image source={require("../assets/logo_comfa.png")} style={{width, height: 250, resizeMode: 'stretch',}} />
            <Text style={{color:"black", fontSize: 22, fontWeight: "bold", textAlign: "center"}}> {"\n"}Comfacasanare lo invita a que si no esta registrado se registre para iniciar sesión y conocer información de su total importancia.{"\n"}</Text>
            <TextInput 
                keyboardType="numeric"
                label="Identificación"
                value={usuario}
                onChangeText={text => setUsuario(text)}
            />
            <TextInput
                secureTextEntry={true}
                label="Contraseña"
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button onPress={()=>validacion()} mode="outlined" style={{margin:10}}>Iniciar Sesión</Button>
            <Text style={{textAlign:"center"}}>Si no tienes contraseña</Text>
            <Button onPress={()=>navigation.navigate('Registro')} mode="outlined" style={{margin:10}}>REGISTRATE</Button>
            <Button onPress={()=>navigation.navigate('Forgot')} mode="outlined" style={{margin:10}}>OLVIDE CONTRASEÑA</Button>
            <Pie/>
            </ScrollView>
            
        </View>
)}