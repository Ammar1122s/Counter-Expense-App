import React from 'react'
import {View,FlatList,Text,StyleSheet,Pressable} from "react-native"
import ExpenseSummary from './ExpenseSummary'
import { DummyExpense } from './DummyExpense'

import { GlobalStyles } from '../Colors'

import { DateFormate } from './DateFormate'

import { useNavigation } from '@react-navigation/native'

function ExpenseList(props) {
  
  const navigation = useNavigation();
   function onPressHandler(id){
    navigation.navigate("ManageExpense",{
    expenseId:id
    })

   }

    function render(itemData){
        return(
          <Pressable style={({pressed}) => pressed ? style.pressedStyle : null} 
          onPress={onPressHandler.bind(this,itemData.item.id)}>

          <View style={style.fullMain}>
          <View style={style.main}>
            <Text style={{color:"white",fontSize:16}}>{itemData.item.description}</Text>
            <Text style={{color:"white",fontSize:14}}>{DateFormate(itemData.item.date)}</Text>
          </View>

          <View style={style.amount}>
            <Text>{itemData.item.amount}</Text>
          </View>

          </View>
          </Pressable>
        )
      }


  return (
    <FlatList data={props.expense} keyExtractor={(item)=>item.amount + Math.random()}
    renderItem={render}/>
  )
}

export default ExpenseList

const style = StyleSheet.create({
    fullMain:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:GlobalStyles.colors.primary500,
        padding:12,
        margin:10,
        justifyContent:"space-between",
        height:70,
        borderRadius:10

    },
    main:{
      flexDirection:"column",
      justifyContent:"space-between",
      height:"100%"
    },
    amount:{
        backgroundColor:"white",
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
        width:"25%",
        borderRadius:5
    

    },
    pressedStyle:{
      opacity:0.6
    }
})