import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Pie = () => (
 <Appbar style={styles.bottom}>
    
    <Appbar.Content title="© Comfacasanare 2020" style={{alignItems:"center"}} />
    
  </Appbar>
 );

export default Pie

const styles = StyleSheet.create({
  bottom: {
    // marginTop: Constants.statusBarHeight,
    
    // left: 0,
    // right: 0,
    backgroundColor: "white",
    
  },
});