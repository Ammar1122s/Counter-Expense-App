import React from 'react'
import { Pressable, View,Text,StyleSheet } from 'react-native'
import { GlobalStyles } from './Colors'

function CustomButton(props) {
  return (
    <Pressable style={({pressed}) => pressed ? styles.onPress : null} onPress={props.onPress}>

    <View style={props.title ==="Cancel" ? [styles.subMain,{backgroundColor:GlobalStyles.colors.primary700}]
     : styles.subMain} >
        <Text style={{color:"white",fontSize:20}}>{props.title}</Text>
    </View>

    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    main:{
   // margin:
    },
    subMain:{
        backgroundColor:GlobalStyles.colors.primary500,
        width:120,
        height:45,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    },
    onPress:{
        opacity:0.5
    }
})