import React from 'react'
import {View,Text,StyleSheet} from "react-native"
import ExpenseSummary from './ExpenseSummary'
import ExpenseList from './ExpenseList'


function ExpenseOutput(props) {

 
  return (
    <>
    <View>
       <ExpenseSummary expense={props.expense} period={props.ExpensePeriod} />
    </View>
   <View>
    {
      props.empty > 0 ?
    <ExpenseList expense = {props.expense}/>
    :
    <View style = {styles.textView}>
    <Text style={styles.text}>No Expense!!!!</Text>
    </View>
}
   </View>
   </>
  )
}

export default ExpenseOutput

const styles = StyleSheet.create({
  text:{
    color:"red",
    fontSize:20
  },
  textView:{
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    height:"80%"
  }
})