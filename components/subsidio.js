import React  from 'react';
import { View, Text, ScrollView, Dimensions} from 'react-native';
import Encabezado from './encabezado';
import Constants from 'expo-constants';
import Slider from './slider';
import HTML from 'react-native-render-html'; 
import Pie from './pie';

export default class Subsidio extends React.Component{

    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){

    return (

        <View style={{marginTop: Constants.statusBarHeight, alignItems: 'center', flex: 1,}}>
            <Encabezado titulo="Vivienda" atras={true} navigation={this.props.navigation}/>
            <ScrollView style={{}}>
                <Slider imagen={["https://www.comfacasanare.com.co/pages/html+flash/noticias/image/737a7c_500x500.jpg","https://www.comfacasanare.com.co/pages/html+flash/noticias/image/e110a4_500X500%20(003).jpg"]} />
                <View style={{padding:10, paddingBottom:80}}>
                     <HTML html={this.props.route.params.infoSubsidio} imagesMaxWidth={Dimensions.get('window').width} />
                </View>
                <Pie/>
            </ScrollView>
            
        </View>
    )}
}

