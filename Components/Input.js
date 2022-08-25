import React from 'react'
import { View,Text,TextInput,StyleSheet } from 'react-native'


function Input(props) {

{
  if(props){

  }
}

  return (
  <View style={styles.main}>
    <Text style={props.check ? styles.text : [styles.text,styles.errorStyle]} >{props.label}</Text>
    
    <View style={[props.label === "Description"  ? [styles.inputView,{height:120,width:"100%"}] 
    : styles.inputView ,
    props.check ? null : [styles.inputView,{backgroundColor:"red"}],
    props.label === "Description" && !props.check ? 
     [styles.inputView,{height:120,width:"100%",backgroundColor:"red"}] 
    : null,
  
  
  
  ]}
    >
    
    <TextInput {...props.InputConfig} onChangeText = {props.handler}
    value={props.value}/>
    </View>

  </View>
  )
}

export default Input

const styles = StyleSheet.create({
    main:{
      marginTop:10,
    
    },
    text:{
        color:"white",
        marginBottom:8
    },
    inputView:{
        backgroundColor:"white",
        borderRadius:8,
        height:35,
        padding:5,
        width:150,

    },
    errorStyle:{
      color:"red",
    }
})