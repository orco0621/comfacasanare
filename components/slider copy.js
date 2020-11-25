import * as React from 'react';
import { StyleSheet,View,TouchableOpacity,Text,FlatList,Image } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      url: "https://www.comfacasanare.com.co/pages/html+flash/noticias/image/50407b_500X500%20GIMNASIO%20COMFACASANARE.jpg",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      url: "https://www.comfacasanare.com.co/pages/html+flash/CONVOC_2_VIVIENDA.jpg",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      url: "https://www.comfacasanare.com.co/pages/html+flash/noticias/image/cd4023_Politecnico%20Comfacasanare%20Link-Pagina%20Web-01%20(1).jpg",
    },
  ];
 
const Slider = () => {
    
    function renderItem ( item ) {
    
        return (
          <Image style={{width:300, height:300}} source={{uri: item.url}}/>
        );
      };
    
      return (
 <View style={{}}>
     <FlatList
        horizontal={true}
        data={DATA}
        renderItem={({item})=>renderItem(item)}
        keyExtractor={item => item.id}
      />
 </View>)
};

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default Slider
