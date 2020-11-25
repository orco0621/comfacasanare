import React  from 'react';
import { View, Text, ScrollView, Dimensions} from 'react-native';
import Encabezado from './encabezado';
import Constants from 'expo-constants';
import Slider from './slider';
import HTML from 'react-native-render-html'; 
import Pie from './pie';

export default class Recreacion extends React.Component{

    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){

    return (

        <View style={{marginTop: Constants.statusBarHeight, alignItems: 'center', flex: 1,}}>
            <Encabezado titulo="Recreación y Deportes" atras={true} navigation={this.props.navigation}/>
            <ScrollView style={{}}>
                <View style={{padding:10, paddingBottom:80}}>
                     <HTML html={this.props.route.params.infoRecreacion} imagesMaxWidth={Dimensions.get('window').width} />
                </View>
                <Pie/>
            </ScrollView>
            
        </View>
    )}
}