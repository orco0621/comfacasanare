import React from 'react';
import { View} from 'react-native';
import { TextInput, Button} from 'react-native-paper';
import Encabezado from './encabezado';
import Constants from 'expo-constants';

export default function Forgot({navigation}){

    const [email, setEmail] = React.useState('');
    const validacion=async()=>{
        const response = await fetch('https://appcomfa.tk/api/validaremail.php?email='+email)
        const data = await response.text()
        if(data!=''){
        if(data=='existe'){
        const response = await fetch('https://appcomfa.tk/api/recuperarcontrasena.php?emailrecu='+email)
        const data = await response.text() 
        // console.log(data);
            if(data=='done'){
                alert('Se envio un mensaje a su email, verificar y cambiar contraseña')
            }else {
                alert('No pudimos enviar el email de recuperación, intenta nuevamente')
            }
        }else {
                alert('Email no existe')
        }
        }
    }

    return (
        <View style={{marginTop: Constants.statusBarHeight}}>
            <Encabezado titulo="Recuperar Contraseña" atras={true} navigation={navigation}/>
            <View style={{padding:10}}>
            
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            
            <Button onPress={()=>validacion()} mode="outlined" style={{margin:10}}>Recuperar Contraseña</Button>
            </View>
        </View>
)}