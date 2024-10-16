import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';

const Box = ({colorName,hexCode}) => {
    return (
        <View style={[styles.viewContainer,{backgroundColor:hexCode}]}>
    <Text style={styles.textView}>{colorName} {hexCode}</Text>
   </View>
    );
}

const styles = StyleSheet.create({
    viewContainer:{backgroundColor:"#2aa198",marginHorizontal:13,borderRadius:7 ,marginTop:15},
    textView:{
      color:"white",
      fontWeight:"bold" ,
      textAlign:"center",
      padding:15,
      fontSize:16
    },
})

export default Box;
