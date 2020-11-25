import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ImageBackground, Dimensions, TouchableOpacity, Button } from 'react-native';
import Encabezado from './encabezado';
import Slider from './slider';
import Constants from 'expo-constants';
import Pie from './pie';
import Registro from './registro';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const {width}= Dimensions.get("window")
export default function Home({navigation, route}) {
  const [expoPushToken, setExpoPushToken] = React.useState('');
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();
  const [imagenes,setImagenes] = React.useState();
  const [cargando,setCargando] = React.useState(true)
  const [infoSubsidio,setInfoSubsidio] = React.useState()
  const [infoCuota,setInfoCuota]=React.useState()
  const [infoCredito,setInfoCredito]=React.useState()
  const [infoConvenios,setInfoConvenios]=React.useState()
  const [infoRecreacion,setInfoRecreacion]=React.useState()
  const [infoNosotros,setInfoNosotros]=React.useState()
  const [infoContactenos,setInfoContactenos]=React.useState()
  const [Loged,setLoged] = React.useState(false)
  const [idUsuario,setIdUsuario] = React.useState()
  const [datosUsuario,setDatosUsuario] = React.useState()
  //const [datosGiro,setDatosGiro] = React.useState()

  React.useEffect( () => {

    route.params ? setIdUsuario(route.params.cedula) : null
    route.params ? setLoged(route.params.loged) : null
    route.params ? setDatosUsuario(route.params.data) : null
    //route.params ? setDatosGiro(route.params.cedula) : null
    
    registerForPushNotificationsAsync().then(token => enviarTokenBD(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  enviarTokenBD=async(token) =>{
    await fetch("https://appcomfa.tk/api/token.php?token="+token)
  }

  getInfo =  async() => {
    const response = await fetch("http://appcomfa.tk/wp-json/wp/v2/sliderhome")
    const post =  await response.json()
    setImagenes(post)
    setCargando(false)
  };

  getInfoSubsidio =  async() => {
    const response = await fetch("http://appcomfa.tk/wp-json/wp/v2/pages/70")
    const post =  await response.json()
    setInfoSubsidio(post.content.rendered)
  };

  getInfoCuota =  async() => {
    const response = await fetch("http://appcomfa.tk/wp-json/wp/v2/pages/54")
    const post =  await response.json()
    setInfoCuota(post.content.rendered)
  };

  getInfoCredito =  async() => {
    const response = await fetch("http://appcomfa.tk/wp-json/wp/v2/posts/65")
    const post =  await response.json()
    setInfoCredito(post.content.rendered)
  };

  getInfoConvenios =  async() => {
    const response = await fetch("http://appcomfa.tk/wp-json/wp/v2/posts/80")
    const post =  await response.json()
    setInfoConvenios(post.content.rendered)
  };

  getInfoRecreacion =  async() => {
    const response = await fetch("http://appcomfa.tk/wp-json/wp/v2/posts/31")
    const post =  await response.json()
    setInfoRecreacion(post.content.rendered)
  };

  getInfoNosotros =  async() => {
    const response = await fetch("http://appcomfa.tk/wp-json/wp/v2/posts/87")
    const post =  await response.json()
    setInfoNosotros(post.content.rendered)
  };

  getInfoContactenos =  async() => {
    const response = await fetch("http://appcomfa.tk/wp-json/wp/v2/posts/90")
    const post =  await response.json()
    setInfoContactenos(post.content.rendered)
  };

  React.useEffect(()=>{
      getInfo()
      getInfoSubsidio()
      getInfoCuota()
      getInfoCredito()
      getInfoConvenios()
      getInfoRecreacion()
      getInfoNosotros()
      getInfoContactenos()
  },[])

  let data = []

  for(let i in imagenes){

    for( let k in imagenes[i].title){

      data = data.concat(imagenes[i].title[k])

    }

  }

  if(cargando){
    return(
      <View style={[styles.container,{justifyContent:"center"}]}>
        <Image source={require("../assets/splash.png")} style={{width, height: 350, resizeMode: 'stretch',}} />
      </View>
           
    )
  }
  return (
    <View style={styles.container}>
      <Encabezado titulo="Comfacasanare" sesion={true} loged={Loged} navigation={navigation} datosUsuario={datosUsuario} />
      <ScrollView style={{marginTop:4, width}}>
       
        {
          imagenes ?
          <Slider imagen={data} />
          :null
        }

      {/* <Text>{JSON.stringify(imagenes) }</Text> */}
      {/* <View style={{flex:1, height:150, alignItems:"center", justifyContent:"center", flexDirection:"column"}}><ImageBackground source={image} style={styles.image}><Text style={{color:"black"}}>Subsidios</Text></ImageBackground></View> */}
      <TouchableOpacity onPress={() => Loged==false ? navigation.push('Login') : navigation.push('Perfil',{datosUsuario})}><View style={{flex:1, height:120, alignItems:"center", justifyContent:"center", borderWidth: 4, borderRadius: 6, backgroundColor: "#005194", borderColor: "black"}}><Text style={{color:"white", fontSize: 20, fontWeight: "bold"}}>{Loged==true ? "Perfil" : "Iniciar Sesión"}</Text></View></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('HomeSubsidios',{infoSubsidio:infoSubsidio,infoCuota:infoCuota})}><View style={{flex:1, height:120, alignItems:"center", justifyContent:"center", borderWidth: 4, borderRadius: 6, backgroundColor: "#f3d20d", borderColor: "white"}}><Text style={{color:"white", fontSize: 20, fontWeight: "bold"}}>Subsidios</Text></View></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Credito',{infoCredito:infoCredito})}><View style={{flex:1, height:120, alignItems:"center", justifyContent:"center", borderWidth: 4, borderRadius: 6, backgroundColor: "#005194", borderColor: "black"}}><Text style={{color:"white", fontSize: 20, fontWeight: "bold",}}>Créditos</Text></View></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Recreacion',{infoRecreacion:infoRecreacion})}><View style={{flex:1, height:120, alignItems:"center", justifyContent:"center", borderWidth: 4, borderRadius: 6, backgroundColor: "#f3d20d", borderColor: "white"}}><Text style={{color:"white", fontSize: 20, fontWeight: "bold"}}>Recreación y Deportes</Text></View></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Nosotros',{infoNosotros:infoNosotros})}><View style={{flex:1, height:120, alignItems:"center", justifyContent:"center", borderWidth: 4, borderRadius: 6, backgroundColor: "#005194", borderColor: "black"}}><Text style={{color:"white", fontSize: 20, fontWeight: "bold"}}>Institucional</Text></View></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Convenios',{infoConvenios:infoConvenios})}><View style={{flex:1, height:120, alignItems:"center", justifyContent:"center", borderWidth: 4, borderRadius: 6, backgroundColor: "#f3d20d", borderColor: "white"}}><Text style={{color:"white", fontSize: 20, fontWeight: "bold"}}>Convenios</Text></View></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Contactenos',{infoContactenos:infoContactenos})}><View style={{flex:1, height:120, alignItems:"center", justifyContent:"center", borderWidth: 4, borderRadius: 6, backgroundColor: "#005194", borderColor: "black"}}><Text style={{color:"white", fontSize: 20, fontWeight: "bold"}}>Contactenos</Text></View></TouchableOpacity>
      <Pie/>
      </ScrollView>
    </View>
  );
}
const image=require("../assets/1.png")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width
  },
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}