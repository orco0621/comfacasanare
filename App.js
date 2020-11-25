import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./components/home"
import Subsidio from "./components/subsidio"
import HomePerfil from "./components/homeperfil"
import Encabezado from './components/encabezado';
import Registro from './components/registro';
import Login from './components/login';
import Forgot from './components/forgotpass';
import HomeSubsidios from './components/homesubsidios';
import CuotaMonetaria from './components/cuotamonetaria';
import Credito from './components/credito';
import Convenios from './components/convenios';
import Recreacion from './components/recreacion';
import Nosotros from './components/nosotros';
import Contactenos from './components/contactenos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="HomeSubsidios" component={HomeSubsidios}/>
        <Stack.Screen name="CuotaMonetaria" component={CuotaMonetaria}/>
        <Stack.Screen name="Subsidio" component={Subsidio}/>
        <Stack.Screen name="Credito" component={Credito}/>
        <Stack.Screen name="Convenios" component={Convenios}/>
        <Stack.Screen name="Recreacion" component={Recreacion}/>
        <Stack.Screen name="Nosotros" component={Nosotros}/>
        <Stack.Screen name="Contactenos" component={Contactenos}/>
        <Stack.Screen name="Perfil" component={HomePerfil}/>
        <Stack.Screen name="Registro" component={Registro}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Forgot" component={Forgot}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




