import React from 'react'
import {View,Text,StyleSheet} from "react-native"
import { GlobalStyles } from '../Colors'

function ExpenseSummary(props) {

    const TotalExpense = props.expense.reduce((sum,expense)=>{
        return sum + expense.amount
    },0)


  return (
    <>
   <View style={styles.main}>
   
    <Text style={styles.textDays}>
        {props.period}
    </Text>

    <Text style={styles.textAmount}>${TotalExpense.toFixed(2)}</Text>

   </View>
   </>
  )
}

export default ExpenseSummary

const styles = StyleSheet.create({
  main:{
    margin:18,
    padding:8,
      backgroundColor:"white",
      flexDirection:"row",
      justifyContent:"space-between",
      height:45,
      alignItems:"center",
      borderRadius:12
    
  },
  textDays:{
    color:GlobalStyles.colors.primary400
  },
  textAmount:{
    color:GlobalStyles.colors.primary500,
    fontWeight:"bold"
  }
})