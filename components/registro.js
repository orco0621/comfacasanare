import React from 'react';
import { View,  ScrollView, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import { TextInput, Button} from 'react-native-paper';
import Encabezado from './encabezado';
import Constants from 'expo-constants';
import Pie from './pie';

const {width}= Dimensions.get("window")
export default function Registro({navigation}){
    const [text, setText] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const validacion=async()=>{
        if(text== "" || password == ""){
            alert("Debe Llenar Todos Los Campos")
        }else{
            const response = await fetch('https://appcomfa.tk/api/validarcedula.php?cedula='+text)
            const data = await response.text()
            if(data!=''){
                if(data=='existe'){
                
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
                        const response = await fetch('https://appcomfa.tk/api/registrarse.php?cedula='+text+'&email='+email+'&pass='+password)
                        const data = await response.text() 
                        // console.log(data);
                            if(data==1){
                                alert('Registro exitoso, ahora puede iniciar sesión')
                            }else if(data==2){
                                alert('Ya se encuentra registrado')
                            }else{
                                alert('No se pudo realizar el registro')
                            }
                    } else {
                        alert("Tiene que escribir una direccion de Email Correcta");
                    }
                }else {
                alert('No estas afiliado a Comfacasanare')
                }
            }
        }
    }

    return (
        <View style={{marginTop: Constants.statusBarHeight, alignItems: 'center', flex: 1,}}>
            <Encabezado titulo="Registro" atras={true} navigation={navigation}/>
            <ScrollView style={{marginTop:4, width}}>
            <Image source={require("../assets/logo_comfa.png")} style={{width, height: 250, resizeMode: 'stretch',}} />
            <Text style={{color:"black", fontSize: 22, fontWeight: "bold", textAlign: "center"}}> {"\n"}Para registrarse indicar número de cédula, un correo electronico valido y contraseña.{"\n"}</Text>
            <View style={{padding:10}}>
            <TextInput 
                keyboardType="numeric"
                label="Identificación"
                value={text}
                onChangeText={text => setText(text)}
            />
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                secureTextEntry={true}
                label="Contraseña"
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button onPress={()=>validacion()} mode="outlined" style={{margin:10}}>Registrarse</Button>
            </View>
            <Pie />
            </ScrollView>
            
        </View>
)}