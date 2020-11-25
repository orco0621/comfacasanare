import React  from 'react';
import { View, Text, ScrollView, Dimensions} from 'react-native';
import Encabezado from './encabezado';
import Constants from 'expo-constants';
import Slider from './slider';
import HTML from 'react-native-render-html'; 
import Pie from './pie';

export default class Credito extends React.Component{

    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){

    return (

        <View style={{marginTop: Constants.statusBarHeight, alignItems: 'center', flex: 1,}}>
            <Encabezado titulo="Credito" atras={true} navigation={this.props.navigation}/>
            <ScrollView style={{}}>
                <View style={{padding:10, paddingBottom:80}}>
                     <HTML html={this.props.route.params.infoCredito} imagesMaxWidth={Dimensions.get('window').width} />
                </View>
                <Pie/>
            </ScrollView>
            
        </View>
    )}
}