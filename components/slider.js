import * as React from 'react';
import { StyleSheet,View,TouchableOpacity,Text,FlatList,Image,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Swiper from 'react-native-swiper';

const {width}= Dimensions.get("window")
const {height}= Dimensions.get("window")

const Imgmover=(props)=>(
    <View style={{flex:1, marginBottom:4}}>
        <Image style={{flex:1, width}} resizeMode="contain" source={{uri: props.uri}}/>
    </View>
)
 
class Slider extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            imageSlider:
                this.props.imagen
        }
    }
    render(){
        return (
            
            <View style={{flex:1,}}>
                <Swiper
                autoplayTimeout={10}
                autoplay
                height={height/2}
                >
                    {
                        this.state.imageSlider.map((item,i)=><Imgmover
                            uri={item}
                            key={i}
                        />)
                    }
                </Swiper>
            </View>)
       };}
    
      


export default Slider
