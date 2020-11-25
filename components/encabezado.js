import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Encabezado = ({titulo,atras,sesion,navigation,loged,route,datosUsuario}) => {
 return (
 <Appbar style={styles.bottom}>
   {
    atras
    ?
    <Appbar.Action icon="arrow-left" onPress={() => navigation.navigate("Home")}/>
    :
    // <Appbar.Action icon="menu" onPress={() => console.log('Pressed menu')}/>
    null
    }
    {titulo
    ?
    <Appbar.Content title={titulo} style={{alignItems:"center"}} />
    :
    null
    }
    {sesion
    ?
    <Appbar.Action icon="account" onPress={() => loged==true ? navigation.push('Perfil',{datosUsuario}) : navigation.push('Login')}/>
    :
    null
    }
  </Appbar>
 )};

export default Encabezado

const styles = StyleSheet.create({
  bottom: {
    // marginTop: Constants.statusBarHeight,
    
    // left: 0,
    // right: 0,
    backgroundColor: "#005194",
    
  },
});