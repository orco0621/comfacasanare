import React  from 'react';
import { View, Text, ScrollView, Dimensions} from 'react-native';
import Encabezado from './encabezado';
import Constants from 'expo-constants';
import Slider from './slider';
import HTML from 'react-native-render-html'; 
import Pie from './pie';
import {IGNORED_TAGS, alterNode, makeTableRenderer} from '@native-html/table-plugin';
import WebView from 'react-native-webview'

const {width}= Dimensions.get("window")
const renderers = {
table: makeTableRenderer({ WebView })
};

const htmlConfig = {
alterNode,
renderers,
ignoredTags: IGNORED_TAGS
};

export default class Convenios extends React.Component{


    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){

    return (

        <View style={{marginTop: Constants.statusBarHeight, alignItems: 'center', flex: 1,}}>
            <Encabezado titulo="Convenios" atras={true} navigation={this.props.navigation}/>
            <ScrollView style={{width}}>
                
                     <HTML html={this.props.route.params.infoConvenios} {...htmlConfig} imagesMaxWidth={Dimensions.get('window').width} />
                
                <Pie/>
            </ScrollView>
            
        </View>
    )}
}