import React from 'react'
import {Pressable,Text,View,StyleSheet} from 'react-native'
import {Ionicons} from "@expo/vector-icons"

function ButtonIcon(props) {
  return (
    <Pressable style={({pressed})=> pressed ? styles.pressed : null} onPress={props.onPress}>
        <Ionicons name={props.icon} size={35} color={props.color}/>
    </Pressable>
    
    
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
    pressed:{
        opacity:0.5,
    },
  
})