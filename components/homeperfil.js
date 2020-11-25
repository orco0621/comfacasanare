import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from "./perfil";
import Beneficiarios from "./beneficiarios";

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function HomePerfil({route}) {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Mi Perfil') {
              iconName = focused
                ? 'user'
                : 'user';
            } else if (route.name === 'Beneficiarios') {
              iconName = focused ? 'users' : 'users';
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen  name="Mi Perfil" component={Perfil} initialParams={{ datosUsuario: route.params.datosUsuario }} />
        <Tab.Screen name="Beneficiarios" component={Beneficiarios}
                    initialParams={{ datosUsuario: route.params.datosUsuario }} 
         />
    </Tab.Navigator>
  );
}